import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(
    private route: Router
  ) {}
  
  jumpToLogin()
  {
    this.route.navigate(['../admin-login']);
  }
  jumpToEvent()
  {
    this.route.navigate(['../events'])
  }

}
