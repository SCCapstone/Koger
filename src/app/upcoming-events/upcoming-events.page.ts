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
  data: string;
  constructor (private firestoreService: FirestoreService, private http: HttpClient) {
    // this.data = '';
  }

  ngOnInit () {
    this.eventList = this.firestoreService.getEventData();
  }
  ionViewWillEnter() {
    this.prepareDataRequest();
      /*.subscribe(
        data => {
          this.data = JSON.stringify(data);
          console.log(this.data);
        }*/
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
  private prepareDataRequest() {
    // const dataUrl = 'https://www.kogercenterforthearts.com/upcoming.php';
    const dataUrl = 'https://jsonplaceholder.typicode.com/users';
    // const options = {mode: 'no-cors', method: "get", headers: new Headers({ "Content Type": "application/json"})};
    const res = fetch(dataUrl, {mode: 'no-cors'});
    console.log(res);
  }
}
