import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seat-description',
  templateUrl: './seat-description.page.html',
  styleUrls: ['./seat-description.page.scss'],
})
export class SeatDescriptionPage implements OnInit {

  inputSeat: any;
  carousel: any;

  message = {
    message1: '',
    message2: '',
    message3: '',
    message4: ''
  };

  pictures = {
    picture1: '',
    picture2: '',
    picture3: '',
    picture4: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.inputSeat = this.router.getCurrentNavigation().extras.state.seat;
      }
    })
  }

  ngOnInit() {

    this.generateMessagesAndPictures();
    this.generateCarousel();
    
  }

  generateMessagesAndPictures() {
    this.pictures.picture1="../../assets/img/KogerCenterFront.jpg";

    this.pictures.picture2="../../assets/img/MapLobby.jpeg";

    if(this.inputSeat.section=='RORC' || this.inputSeat.section=='RGTR' || this.inputSeat.section=='RBAL') {
      this.message.message1="Enter using the Assembly Street Entrance on the right side of the front of the building";
    } else {
      this.message.message1="Enter using the Greene Street Entrance on the left side of the building, across from Darla Moore";
    }

    if(this.inputSeat.section=='RGTR' || this.inputSeat.section=='LGTR') {
      this.message.message2="Go to the second level via the stairs or elevator. Stay on the side of the building you entered on";

      this.pictures.picture3="../../assets/img/MapFloor2.jpg";
      this.pictures.picture4="../../assets/img/MapGrand.jpg";
    } else if(this.inputSeat.section=='RBAL' || this.inputSeat.section=='LBAL') {
      this.message.message2="Go to the third level via the stairs or elevator. Stay on the side of the building you entered on";

      this.pictures.picture3="../../assets/img/KogerCenterSunset.jpg";
      this.pictures.picture4="../../assets/img/MapBalcony.jpg";
    } else {
      this.message.message2="Stay on the first level on your side of the building";

      this.pictures.picture3="../../assets/img/MapLobby.jpeg";
      this.pictures.picture4="../../assets/img/MapOrchestra.jpg";
    }

    this.message.message3="Find the corresponding door for your row in the section.  There are ushers to direct traffic";

    this.message.message4="Enter the door into the seating bowl and find your seat in the correct row"
  }

  generateCarousel() {
    this.carousel = {
      items: [
        {
          id: 1,
          image: this.pictures.picture1,
          description: this.message.message1
        },
        {
          id: 2,
          image: this.pictures.picture2,
          description: this.message.message2
        },
        {
          id: 3,
          image: this.pictures.picture3,
          description: this.message.message3
        },
        {
          id: 4,
          image: this.pictures.picture4,
          description: this.message.message4
        }
      ]
    }
  }

}
