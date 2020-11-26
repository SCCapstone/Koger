import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.page.html',
  styleUrls: ['./upcoming-events.page.scss'],
})
export class UpcomingEventsPage implements OnInit {
  public eventList: Observable<Event[]>
  public afStore: AuthenticateService;
  constructor (private firestoreService: FirestoreService) {}

  ngOnInit () {
    this.eventList = this.firestoreService.getEventData();
  }
  userExists()
  {
    console.log(this.afStore.userExists())
    return this.afStore.userExists()
  }
  openURL(url: string) 
  {
    if (url == null || url === "")
      alert("URL for event was not found.")
    else
      window.open(url, "_blank")
  }
}
