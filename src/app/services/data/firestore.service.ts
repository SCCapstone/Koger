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
}
