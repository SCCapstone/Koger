import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  userEmail: string;

  constructor( public authService: AuthenticateService, public router: Router) { }

  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if(res !== null)
      {
        this.userEmail = res.email;
      } else {
        this.router.navigate(['admin-login']);
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

}
