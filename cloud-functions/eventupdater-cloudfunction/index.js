const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { extractInstanceAndPath } = require("firebase-functions/lib/providers/database");
const { firestore } = require("firebase-admin");
const cors = require('cors')({ origin: true});

admin.initializeApp();

exports.webScraper = functions
.https.onRequest( async (request, response) => {
  /*.runWith({ timeoutSeconds: 300, memory: "1GB"})
  .region('us-east1')
  .pubsub
  .schedule('This will run every 4 hours!').onRun(async context => {*/
  cors(request, response, async () => {
    const base_url = "https://kogercenterforthearts.com/event.php?id=";
    const {JSDOM} = jsdom;
    let didSiteRespond = true;
    let eventCounter = 976;
    while(didSiteRespond) {
      let tested_url = base_url + eventCounter.toString();
      const koger_response = await fetch(tested_url, {redirect: 'error'})
        .catch(error => {
          didSiteRespond = false;
          console.log("Event at this ID does not exist so continuing");
        });
        console.log("HERE");
     if ( didSiteRespond ) {
        const text = await koger_response.text();
        const dom = new JSDOM(text);

        const event_title = dom.window.document.querySelector("span.eventtitle").textContent;
        const event_dates = dom.window.document.querySelector("span.date").textContent;

        
        console.log(event_title + " " + event_dates + " \n" + tested_url + " \n");
        
        const eventRef = admin.firestore().doc('/Event/' + event_title);
        eventRef.get()
          .then((docSnapshot) => {
            if(docSnapshot.exists) {
                /*let new_dates = docSnapshot.data().dates + " " + event_dates;
                eventRef.update({
                  dates: new_dates
                }); */
            } else {
              eventRef.set({
                updatedAt: new Date(),
                dates: event_dates,
                title: event_title,
                link: tested_url
              });
            }
          })
        ++eventCounter;
      }
    }
    console.log("Program Terminated");
    response.write("Database Successfully Updated!");
    response.end();
  })
});
