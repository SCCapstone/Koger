import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Event } from '../../shared/event';
import { Message } from '../../shared/message';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  notification: any;
  isLoggedIn: boolean;
  constructor(public firestore: AngularFirestore, public alertController: AlertController) { 
    this.isLoggedIn = false;
  }
 // Creates alert for when an event already exists
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Event exists',
      subHeader: 'The event you are creating already exists',
      message: 'Overwriting...',
      buttons: ['OK']
    });
    console.log("HERE!");
    await alert.present();

  }
  /*  Returns event data in order of index from Firestore 
      (index is based on order of events pulled from https://kogercenterforthearts.com/upcoming.php) */
  getEventData(): Observable<Event[]> {
    return this.firestore.collection<Event>('Event', ref=> ref.orderBy("index")).valueChanges();
  }
  // Updates events based on changes to Firestore
  read_events() {
    return this.firestore.collection('Event').snapshotChanges();
  }

  // queries the push collection
  getLastMessage(): Observable<Message[]> {
    return this.firestore.collection<Message>('push').valueChanges();
  }

  // updates message document in push collection, when this update occurs, the job (cloud function) 
  // on the firebase console will pick it up and send out the push notifications
  updateMessage(title: string, body: string) {
    return this.firestore.collection('push').doc('message').update({ title: title, body: body});
  }
  
  /*Event is created using provided information from user in Firestore
    If the event already exists then it notifies the user and overwrites the data of the previous event*/
  createEvent(
    title: string,
    description: string,
    dates: string,
    link: string,
    tag: string,
  ): Promise<void> {
    //Attempts to update if it cannot then it creates a new doc
    return this.firestore.doc('Event/' + title).update({
      title,
      description,
      dates,
      link,
      tag
      // Event exists
    }).then(()=> {
      console.log("EXISTS");
      this.presentAlert();
      // Event does not exist
    }).catch((error) => {
      console.log("DOES NOT EXIST");
      return this.firestore.doc('Event/' + title).set({
        title,
        description,
        dates,
        link,
        tag
      })
    });

  }
  // Deletes an event from the Firestore database given the event's title
  deleteEvent(
    eventName: string
  ): Promise<void> {
    return this.firestore.doc('Event/' + eventName).delete();
  }

  // This function ensures only unique tokens are stored in the firebase Users collection.
  // Storing tokens in the firebase db allows for push notifications to be sent out to all
  // users from a single device
  createUser(
    token: string
  ): Promise<void> {
    const id = this.firestore.createId();
    const query$ = this.firestore.collection('Users', ref => ref.where('token', '==', token));
    query$.valueChanges().subscribe(data => {
      if (data.length == 0) {
        console.log("no data found " + data)
        return this.firestore.doc('Users/' + id).set({
          token
        });
      }
    });
    return;
  }

  // Editing event function that provided with new data updates the existing event.
  editEvent(title: string,
    new_description: string,
    new_dates: string,
    new_link: string,
    new_tag: string,): Promise<void> {
      // Add functionality to edit event title by just creating a new event
    return this.firestore.doc('Event/' + title).update({ description: new_description, dates: new_dates, link: new_link, tag: new_tag
    });
  }
}
