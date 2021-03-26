import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { AuthenticateService } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.page.html',
  styleUrls: ['./upcoming-events.page.scss'],
})
export class UpcomingEventsPage implements OnInit {
  public eventList: Observable<Event[]>
  public afStore: AuthenticateService;
  data: string;
  constructor (private socialSharing: SocialSharing, private firestoreService: FirestoreService, private http: HttpClient) {
    // this.data = '';
  }


  ngOnInit () {
    this.generatePost();
    this.prepareDataRequest();
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
  openPurchaseTicket()
  {
    window.open("https://itkt.choicecrm.net/templates/USCK/#/events")
  }
  private prepareDataRequest() {
    // const dataUrl = 'https://www.kogercenterforthearts.com/upcoming.php';
    const dataUrl = 'https://jsonplaceholder.typicode.com/users';
    // const options = {mode: 'no-cors', method: "get", headers: new Headers({ "Content Type": "application/json"})};
    const res = fetch(dataUrl, {mode: 'no-cors'});
    console.log(res);
  }
  private generatePost() {
    this.http.post('https://jsonplaceholder.typicode.com/users', {

    }).subscribe((response)=> {
      console.log(response);
    })
  }

  //method to share to facebook (hopefully)
  /*As far as I know, these methods
    only work on devices rather than in
    ionic serve, as well as working whenever
    the apps being shared to are installed simultaneously*/
  public shareViaFacebookWithPasteMessageHint(message, image, url, message2){
    this.socialSharing.shareViaFacebookWithPasteMessageHint(message, image, url, message2).then((success) =>{
      alert("Success");
    }).catch((e) =>{
      alert("Could not share");
    });
  }

  //method to share to twitter
  /*As far as I know, these methods
    only work on devices rather than in
    ionic serve, as well as working whenever
    the apps being shared to are installed simultaneously */
  public shareViaTwitter(message, image, url){
    this.socialSharing.shareViaTwitter(message, image, url).then((success) =>{
      alert("Success");
    }).catch((e)=>{
      alert("Could not share");
    });
  }

  shareviaFacebook(message, image, url){
    this.socialSharing.shareViaFacebook(message,image, url)
      .then((success) =>{
           alert("Success");
       })
       .catch((err)=>{
          alert("Could not share");
        });
    }
}
