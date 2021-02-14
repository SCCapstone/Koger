import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { AuthenticateService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.page.html',
  styleUrls: ['./upcoming-events.page.scss'],
})
export class UpcomingEventsPage implements OnInit {
  public eventList: Observable<Event[]>
  public afStore: AuthenticateService;
  constructor (private firestoreService: FirestoreService, private http: HttpClient) {}

  ngOnInit () {
    this.eventList = this.firestoreService.getEventData();
    this.http.get('https://kogercenterforthearts.com/upcoming.php').subscribe((response)=> {
      console.log(response);
    });
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
