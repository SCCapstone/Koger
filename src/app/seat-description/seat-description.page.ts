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
    message4: '',
    doorNumber: 0
  };

  pictures = {
    picture1: '',
    picture2: '',
    picture3: '',
    picture4: ''
  }

  seatView: any;

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
    this.generateDoorNumber();
    this.generateMessagesAndPictures();
    this.generateCarousel();
  }

  // 'RORC: Right Orchestra', 'LORC: Left Orchestra', 'RGTR: Right Grand Tier', 'LGTR: Left Grand Tier',
  // 'RBAL: Right Balcony', 'LBAL: Left Balcony', 'HCP: ADA Accessible'

  generateMessagesAndPictures() {
    this.pictures.picture1="../../assets/img/KogerCenterFront.jpg";
    this.message.message1="Enter the Koger Center through either the Greene Street Entrance or the Assembly Street Entrance"
    this.message.message4="There are ushers available near the doors to help you find your seat. You are SEAT " + this.inputSeat.seatNum + " in ROW " + this.inputSeat.row + ".";

    if(this.inputSeat.section=='LORC: Left Orchestra') {
      this.pictures.picture2="../../assets/img/LobbyLeft.jpg";
      this.message.message2="Stay on the first level and walk to the left side of the theatre";
      this.pictures.picture3="../../assets/img/LobbyLeft.jpg";
      this.message.message3="Enter the theatre through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      this.pictures.picture4="../../assets/img/MapOrchestra.jpg";
      this.seatView="../../assets/img/LORC.jpg";

    } else if(this.inputSeat.section=='RORC: Right Orchestra') {
      this.pictures.picture2="../../assets/img/LobbyRight.jpg";
      this.message.message2="Stay on the first level and walk to the right side of the theatre";
      this.pictures.picture3="../../assets/img/LobbyRight.jpg";
      this.message.message3="Enter the theatre through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      this.pictures.picture4="../../assets/img/MapOrchestra.jpg";
      this.seatView="../../assets/img/RORC.jpg";

    } else if(this.inputSeat.section=='LGTR: Left Grand Tier') {
      this.pictures.picture2="../../assets/img/LobbyStairs.jpg";
      this.message.message2="Go to the second floor via the stairs or elevator";
      this.pictures.picture3="../../assets/img/GrandTierLeft.jpg";
      this.message.message3="Walk to the left side of the theatre and enter the seating area through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      this.pictures.picture4="../../assets/img/MapGrand.jpg";
      this.seatView="../../assets/img/LGTR.jpg";

    }else if(this.inputSeat.section=='RGTR: Right Grand Tier') {
      this.pictures.picture2="../../assets/img/LobbyStairs.jpg";
      this.message.message2="Go to the second floor via the stairs or elevator";
      this.pictures.picture3="../../assets/img/GrandTierRight.jpg";
      this.message.message3="Walk to the right side of the theatre and enter the seating area through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      this.pictures.picture4="../../assets/img/MapGrand.jpg";
      this.seatView="../../assets/img/RGTR.jpg";

    } else if(this.inputSeat.section=='LBAL: Left Balcony') {
      this.pictures.picture2="../../assets/img/LobbyStairsLeft.jpg";
      this.message.message2="Go to the third floor via the stairs on the left side of the building";
      this.pictures.picture3="../../assets/img/BalconyLeft.jpg";
      this.message.message3="Enter the theatre through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      this.pictures.picture4="../../assets/img/MapBalcony.jpg";
      this.seatView="../../assets/img/LBAL.jpg";

    } else if(this.inputSeat.section=='RBAL: Right Balcony') {
      this.pictures.picture2="../../assets/img/LobbyStairsRight.jpg";
      this.message.message2="Go to the third floor via the stairs on the right side of the building or the elevator";
      this.pictures.picture3="../../assets/img/BalconyRight.jpg";
      this.message.message3="Enter the theatre through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      this.pictures.picture4="../../assets/img/MapBalcony.jpg";
      this.seatView="../../assets/img/RBAL.jpg";

    } else {
      this.pictures.picture2="../../assets/img/NewLobby.jpg";
      this.message.message2="Please see an usher to help you find your seat";
      this.pictures.picture3="../../assets/img/NewLobby.jpg";
      this.message.message3="Enter the theatre on either side through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      this.pictures.picture4="../../assets/img/MapOrchestra.jpg";
    }

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

  generateDoorNumber() {
    if(this.inputSeat.row=="JJ" || this.inputSeat.row=="KK" || this.inputSeat.row=="LL" || this.inputSeat.row=="DDD" || this.inputSeat.section=="HCP") {
      this.message.doorNumber=1;
    } else if(this.inputSeat.row=="T" || this.inputSeat.row=="U" || this.inputSeat.row=="GG" || this.inputSeat.row=="HH" || this.inputSeat.row=="II" || this.inputSeat.row=="AAA" || this.inputSeat.row=="BBB" || this.inputSeat.row=="CCC") {
      this.message.doorNumber=2;
    } else if(this.inputSeat.row=="Q" || this.inputSeat.row=="R" || this.inputSeat.row=="S" || this.inputSeat.row=="DD" || this.inputSeat.row=="EE" || this.inputSeat.row=="FF") {
      this.message.doorNumber=3;
    } else if(this.inputSeat.row=="N" || this.inputSeat.row=="O" || this.inputSeat.row=="P" || this.inputSeat.row=="AA" || this.inputSeat.row=="BB" || this.inputSeat.row=="CC") {
      this.message.doorNumber=4;
    } else if(this.inputSeat.row=="K" || this.inputSeat.row=="L" || this.inputSeat.row=="M") {
      this.message.doorNumber=5;
    } else if(this.inputSeat.row=="H" || this.inputSeat.row=="I" || this.inputSeat.row=="J") {
      this.message.doorNumber=6;
    } else if(this.inputSeat.row=="A" || this.inputSeat.row=="B" || this.inputSeat.row=="C" || this.inputSeat.row=="D" || this.inputSeat.row=="E" || this.inputSeat.row=="F" || this.inputSeat.row=="G") {
      this.message.doorNumber=7;
    } else {
      this.message.doorNumber=0;
    }
  }

}
