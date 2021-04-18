import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Event } from '../../shared/event';
import { Message } from '../../shared/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  notification: any;
  isLoggedIn: boolean;
  constructor(public firestore: AngularFirestore) { 
    this.isLoggedIn = false;
  }

  getEventData(): Observable<Event[]> {
    return this.firestore.collection<Event>('Event').valueChanges();
  }
  read_events() {
    return this.firestore.collection('Event').snapshotChanges();
  }

  getLastMessage(): Observable<Message[]> {
    return this.firestore.collection<Message>('push').valueChanges();
  }

  updateMessage(title: string, body: string) {
    return this.firestore.collection('push').doc('message').update({ title: title, body: body});
  }
  
  createEvent(
    title: string,
    description: string,
    dates: string,
    link: string,
    tag: string,
  ): Promise<void> {
    return this.firestore.doc('Event/' + title).set({
      title,
      description,
      dates,
      link,
      tag
    });
  }
  
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
