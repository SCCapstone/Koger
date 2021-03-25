import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service'
import { Router } from '@angular/router';
import { FirestoreService } from '../services/data/firestore.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  userEmail: string;

  constructor( public authService: AuthenticateService, public router: Router, private fireStoreService: FirestoreService) { }

  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if(res !== null)
      {
        this.userEmail = res.email;
      } else {
        this.router.navigate(['tab3']);
      }
    }, err => {
      console.log('error', err);
    })
  }
  createEvent()
  {
    this.router.navigate(['create-event']);
  }
  deleteEvent()
  {
    this.router.navigate(['delete-event']);
  }
  editEvent()
  {
    this.router.navigate(['edit-event']);
  }

  sendPush() 
  {
    this.router.navigate(['send-push']);
  }
  logOut()
  {
    this.authService.logoutUser();
    this.fireStoreService.isLoggedIn = false;
    this.router.navigate(["tabs/tab3"]);
  }
  jumpToHomePage()
  {
    this.router.navigate(["tabs/tab3"])
  }

}
