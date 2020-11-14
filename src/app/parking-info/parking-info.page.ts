import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-parking-info',
  templateUrl: './parking-info.page.html',
  styleUrls: ['./parking-info.page.scss'],
})
export class ParkingInfoPage implements OnInit {

  constructor(
    private viewController: ModalController
  ) {}

  ngOnInit() {
  }

  dismissParking() {
    this.viewController.dismiss();
  }

}
