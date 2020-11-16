import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {

  constructor(private photoViewer: PhotoViewer) { }

  ngOnInit() {
  }

  zoomImage(imageData) {
    this.photoViewer.show(imageData);
  }

}
