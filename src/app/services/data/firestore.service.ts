import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Event } from '../../shared/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  getEventData(): Observable<Event[]>{
    return this.firestore.collection<Event>('Event').valueChanges();
  }
  createEvent(
    title:string,
    description: string,
    dates: string,
    link: string,
    tag: string,
  ): Promise<void> { 
    return this.firestore.doc('Event/'+ title).set({
      title,
      description,
      dates,
      link,
      tag
    });
  }
  deleteEvent(
    eventName: string
  ): Promise<void>
  {
    return this.firestore.doc('Event/'+eventName).delete();
  }
}
