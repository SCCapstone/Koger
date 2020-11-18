import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import {Observable} from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  public eventList: Observable<Event[]>
  constructor (private firestoreService: FirestoreService) {}

  ngOnInit () {
    this.eventList = this.firestoreService.getEventData();
  }
}
