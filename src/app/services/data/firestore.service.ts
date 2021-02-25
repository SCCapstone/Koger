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
  constructor(public firestore: AngularFirestore) { }

  getEventData(): Observable<Event[]> {
    return this.firestore.collection<Event>('Event').valueChanges();
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

  createUser(
    token: string
  ): Promise<void> {
    // ensures only unique tokens are stored
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
}
