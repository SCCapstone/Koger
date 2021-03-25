import { Component, OnInit } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-map-lobby',
  templateUrl: './map-lobby.page.html',
  styleUrls: ['./map-lobby.page.scss'],
})
export class MapLobbyPage implements OnInit {

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
