const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { extractInstanceAndPath } = require("firebase-functions/lib/providers/database");
const { firestore } = require("firebase-admin");
const cors = require('cors')({ origin: true});

admin.initializeApp();
var options={ memory: '2GB', timeoutSeconds: 300, };

const findEventInfo = async (event_link, index) =>
{
    const {JSDOM} = jsdom;
    const event_response = await fetch(event_link, {redirect: 'error'})
                .catch(error => {
                    console.log("Event could not be fetched");
                });
                const event_text = await event_response.text();
                const event_dom = new JSDOM(event_text);

                const event_title = event_dom.window.document.querySelector("span.eventtitle").textContent;
                const event_dates = event_dom.window.document.querySelector("span.date").textContent;
                var event_desc = "";
                const all_description = event_dom.window.document.querySelectorAll("div.col-md-8 > div > p");
                all_description.forEach(function(description_container)
                {
                    // description_container = description_container.textContent(/&nbsp;/gi, '');
                    const a_description = description_container.textContent;
        
                    event_desc = event_desc + " " + a_description;
                });
                console.log("EVENT FOUND: " + event_title + " " + event_dates + " \n" + event_link + " \n");
                console.log("DESCRIPTION: " + event_desc);
                const eventRef = admin.firestore().doc('/Event/' + event_title);
                eventRef.get()
                    .then((docSnapshot) => {
                        if(docSnapshot.exists) {
                            eventRef.set({
                                updatedAt: new Date()
                            }, {merge: true})
                    /*let new_dates = docSnapshot.data().dates + " " + event_dates;
                    eventRef.update({
                    dates: new_dates
                    }); */
                    } else {
                        eventRef.set({
                            updatedAt: new Date(),
                            description: event_desc,
                            dates: event_dates,
                            title: event_title,
                            link: event_link,
                            index: index
                        });
                    }
                })
                return;
}

exports.webScraper = 
    functions.runWith({options}).https.onRequest( async (request, response) => {
    //functions.runWith(options).pubsub.schedule('every 120 minutes').onRun(async (request, response) => {

    cors(request, response, async () => {
        const base_url = "https://kogercenterforthearts.com/upcoming.php";
        const {JSDOM} = jsdom;
        const koger_response = await fetch(base_url, {redirect: 'error'})
            .catch(error => {
                console.log("Event at this ID does not exist so continuing");
            });
        const text = await koger_response.text();
        const dom = new JSDOM(text);

        const allEvents = dom.window.document.querySelectorAll("div.col-sm-8")
        var index = 0;
        allEvents.forEach(function(eventContainer){
            ++index;
            const event_link_cont = eventContainer.querySelector("h3 > a");
            // console.log("EVENT LINK: " + event_link_cont.href);
            const event_link = "https://kogercenterforthearts.com/" + event_link_cont.href;
            // console.log("EVENT LINK FORMATTED: " + event_link);
            /* const event_response = fetch(event_link, {redirect: 'error'})
                .catch(error => {
                    console.log("Event could not be fetched");
                });
                const event_text = event_response.text();
                const event_dom = new JSDOM(event_text);const event_desc = "";

                const event_title = event_dom.window.document.querySelector("span.eventtitle").textContent;
                const event_dates = event_dom.window.document.querySelector("span.date").textContent;

                console.log(event_title + " " + event_dates + " \n" + event_link + " \n"); */
            console.log("FINISHED " + findEventInfo(event_link, index));
        });
    });
    return response.send("");
});