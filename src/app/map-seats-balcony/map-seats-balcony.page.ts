import { Component, OnInit } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-map-seats-balcony',
  templateUrl: './map-seats-balcony.page.html',
  styleUrls: ['./map-seats-balcony.page.scss'],
})
export class MapSeatsBalconyPage implements OnInit {

  sliderOpts = {
    zoom: {
      maxRatio:2
    }
  };

  constructor(
    // private photoViewer: PhotoViewer
    ) { }
  ngOnInit() {
  }

  // zoomImage(imageData) {
  //   this.photoViewer.show(imageData);
  // }

}
