// Written by: James Cochran Date: 02.24.2021
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// sendNotifications('hello title', 'hello body');
exports.onPushUpdate = functions.firestore
.document('push/message')
.onWrite((change, context) => {
  // Get an object representing the document
  // e.g. {'title': 'test title', 'body': 'test body'}
  const newValue = change.after.data();

  // access particular fields
  const title = newValue.title;
  const body = newValue.body;

  sendNotifications(title, body);

});

async function sendNotifications(title_msg, body_msg) {
  // Queries the Users collection to grab 
  const snapshot_tokens = await admin.firestore().collection('Users').get()
  var tokens = snapshot_tokens.docs.map(doc => doc.data());
  for (var i = 0; i < tokens.length; i++) {
    var tokenMsg = tokens[i];
    // How to parse the token object returned from doc.data()
    s = JSON.stringify(tokenMsg);
    registrationToken = s.substring(s.indexOf(":") + 2, s.length - 2);
    
    const payload = {
      notification : {
        title: title_msg,
        body: body_msg
      },
      token: registrationToken
    };

    // Send a message to the device corresponding to the provided registration token from collection Users
    admin.messaging().send(payload)
      .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
      })
      .catch((error) => {
        console.log('Error sending message:', error);
      }); 
  } 
}

