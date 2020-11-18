import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private route: Router,
    private navCtrl: NavController,
    ) {}

    jumpToMapLobby()
    {
      this.route.navigate(['../map-lobby']);
    }

    jumpToMapOrchestra()
    {
      this.route.navigate(['../map-seats-orchestra']);
    }

    jumpToMapGrand()
    {
      this.route.navigate(['../map-grand']);
    }

    jumpToMapSeatsGrand()
    {
      this.route.navigate(['../map-seats-grand']);
    }

    jumpToMapBalcony()
    {
      this.route.navigate(['../map-balcony']);
    }

    jumpToMapSeatsBalcony()
    {
      this.route.navigate(['../map-balcony']);
    }
}
