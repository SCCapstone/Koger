import { Component, Injectable, OnInit } from '@angular/core';

// Importing Launch Navigator from Ionic Native to lauch navigation on device
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
@Injectable()
export class ParkingPage implements OnInit {

  // Constructor creates a private instance of the Launch Navigator
  constructor(private launchNavigator: LaunchNavigator) {}

  ngOnInit() {
  }

  // Method that takes in an address and launches the native navigation app with that address
  navme(address) {
    this.launchNavigator.navigate(address);
  }

}
