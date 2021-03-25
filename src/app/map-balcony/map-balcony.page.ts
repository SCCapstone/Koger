import { Component, OnInit } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-map-balcony',
  templateUrl: './map-balcony.page.html',
  styleUrls: ['./map-balcony.page.scss'],
})
export class MapBalconyPage implements OnInit {

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
