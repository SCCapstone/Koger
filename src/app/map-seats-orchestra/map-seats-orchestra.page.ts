import { Component, OnInit } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-map-seats-orchestra',
  templateUrl: './map-seats-orchestra.page.html',
  styleUrls: ['./map-seats-orchestra.page.scss'],
})
export class MapSeatsOrchestraPage implements OnInit {

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
