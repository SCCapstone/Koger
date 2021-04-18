import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seat-description',
  templateUrl: './seat-description.page.html',
  styleUrls: ['./seat-description.page.scss'],
})
export class SeatDescriptionPage implements OnInit {

  // Instance variables for the input seat, the two carousels, and the slides presented on the app
  inputSeat: any;
  otherCarousel: any;
  balconyCarousel: any;
  appSlides: any;

  // Messages to be presented to the user in the carousel
  message = {
    entranceMessage: '',
    levelMessage: '',
    doorMessage: '',
    continueMessage: '',
    seatMessage: '',
    doorNumber: 0
  };

  // Images presented to the user in the carousel
  pictures = {
    entrancePic: '',
    levelPic: '',
    doorPic: '',
    sectionPic: '',
    continuePic: '',
    seatView: ''
  }

  // Constructor gets the input seat information from tab1
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

  // Generates the door number, messages and pictures, and the app slides/carousels
  ngOnInit() {
    this.generateDoorNumber();
    this.generateMessagesAndPictures();
    if(this.inputSeat.section=="LBAL: Left Balcony" || this.inputSeat.section=="RBAL: Right Balcony") {
      this.generateBalconyCarousel();
      this.appSlides = this.balconyCarousel;
    } else {
      this.generateOtherCarousel();
      this.appSlides = this.otherCarousel;
    }
  }

  // 'RORC: Right Orchestra', 'LORC: Left Orchestra', 'RGTR: Right Grand Tier', 'LGTR: Left Grand Tier',
  // 'RBAL: Right Balcony', 'LBAL: Left Balcony', 'HCP: ADA Accessible'

  // Method generates the different messages and pictures based off input seat information
  generateMessagesAndPictures() {
    this.pictures.entrancePic="../../assets/img/KogerCenterFront.jpg";
    this.message.entranceMessage="Enter the Koger Center through either the Greene Street Entrance or the Assembly Street Entrance";
    if(this.inputSeat.seatNum==null) {
      this.message.seatMessage="There are ushers available near the doors to help you find your seat in ROW " + this.inputSeat.row;
    } else {
      this.message.seatMessage="There are ushers available near the doors to help you find your seat. You are in SEAT " + this.inputSeat.seatNum + " in ROW " + this.inputSeat.row;
    }

    if(this.inputSeat.section=='LORC: Left Orchestra' || this.inputSeat.row=='HCP: Left') {
      this.pictures.levelPic="../../assets/img/LobbyLeft.jpg";
      this.message.levelMessage="Stay on the first level and walk to the left side of the theatre";
      this.pictures.doorPic="../../assets/img/LobbyLeft.jpg";
      this.message.doorMessage="Enter the theatre through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      //this.pictures.sectionPic="../../assets/img/MapOrchestra.jpg";
      this.pictures.seatView="../../assets/img/LORC.jpg";
    } else if(this.inputSeat.section=='RORC: Right Orchestra' || this.inputSeat.row=='HCP: Right') {
      this.pictures.levelPic="../../assets/img/LobbyRight.jpg";
      this.message.levelMessage="Stay on the first level and walk to the right side of the theatre";
      this.pictures.doorPic="../../assets/img/LobbyRight.jpg";
      this.message.doorMessage="Enter the theatre through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      //this.pictures.sectionPic="../../assets/img/MapOrchestra.jpg";
      this.pictures.seatView="../../assets/img/RORC.jpg";
    } else if(this.inputSeat.section=='LGTR: Left Grand Tier') {
      this.pictures.levelPic="../../assets/img/LobbyStairs.jpg";
      this.message.levelMessage="Go to the second floor via the stairs or elevator";
      this.pictures.doorPic="../../assets/img/GrandTierLeft.jpg";
      this.message.doorMessage="Walk to the left side of the theatre and enter the seating area through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      //this.pictures.sectionPic="../../assets/img/MapGrand.jpg";
      this.pictures.seatView="../../assets/img/LGTR.jpg";
    } else if(this.inputSeat.section=='RGTR: Right Grand Tier') {
      this.pictures.levelPic="../../assets/img/LobbyStairs.jpg";
      this.message.levelMessage="Go to the second floor via the stairs or elevator";
      this.pictures.doorPic="../../assets/img/GrandTierRight.jpg";
      this.message.doorMessage="Walk to the right side of the theatre and enter the seating area through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      //this.pictures.sectionPic="../../assets/img/MapGrand.jpg";
      this.pictures.seatView="../../assets/img/RGTR.jpg";
    } else if(this.inputSeat.section=='LBAL: Left Balcony') {
      this.pictures.levelPic="../../assets/img/LobbyStairsLeft.jpg";
      this.message.levelMessage="Go to the third floor via the stairs on the left side of the building";
      this.pictures.continuePic="../../assets/img/GrandTierStairsLeft.jpg";
      this.message.continueMessage="Continue up to the third floor";
      this.pictures.doorPic="../../assets/img/BalconyLeft.jpg";
      this.message.doorMessage="Enter the theatre through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      //this.pictures.sectionPic="../../assets/img/MapBalcony.jpg";
      this.pictures.seatView="../../assets/img/LBAL.jpg";
    } else if(this.inputSeat.section=='RBAL: Right Balcony') {
      this.pictures.levelPic="../../assets/img/LobbyStairsRight.jpg";
      this.message.levelMessage="Go to the third floor via the stairs on the right side of the building or the elevator";
      this.pictures.continuePic="../../assets/img/GrandTierStairsRight.jpg";
      this.message.continueMessage="Continue up to the third floor";
      this.pictures.doorPic="../../assets/img/BalconyRight.jpg";
      this.message.doorMessage="Enter the theatre through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      //this.pictures.sectionPic="../../assets/img/MapBalcony.jpg";
      this.pictures.seatView="../../assets/img/RBAL.jpg";
    } else {
      this.pictures.levelPic="../../assets/img/NewLobby.jpg";
      this.message.levelMessage="Please see an usher to help you find your seat";
      this.pictures.doorPic="../../assets/img/NewLobby.jpg";
      this.message.doorMessage="Enter the theatre on either side through DOOR " + this.message.doorNumber + " for ROW " + this.inputSeat.row;
      //this.pictures.sectionPic="../../assets/img/MapOrchestra.jpg";
      this.pictures.seatView="../../assets/img/LORC.jpg";
    }
  }

  // Method to generate the non-balcony level carousel
  generateOtherCarousel() {
    this.otherCarousel = {
      items: [
        {
          id: 1,
          image: this.pictures.entrancePic,
          description: this.message.entranceMessage,
          lastSlide: false
        },
        {
          id: 2,
          image: this.pictures.levelPic,
          description: this.message.levelMessage,
          symbolKey: true,
          lastSlide: false
        },
        {
          id: 3,
          image: this.pictures.doorPic,
          description: this.message.doorMessage,
          symbolKey: true,
          lastSlide: false
        },
        {
          id: 4,
          image: this.pictures.seatView,
          description: this.message.seatMessage,
          lastSlide: true
        }
      ]
    }
  }

  // Method to generate the balcony level carousel
  generateBalconyCarousel() {
    this.balconyCarousel = {
      items: [
        {
          id: 1,
          image: this.pictures.entrancePic,
          description: this.message.entranceMessage,
          lastSlide: false
        },
        {
          id: 2,
          image: this.pictures.levelPic,
          description: this.message.levelMessage,
          symbolKey: true,
          lastSlide: false
        },
        {
          id: 3,
          image: this.pictures.continuePic,
          description: this.message.continueMessage,
          symbolKey: true,
          lastSlide: false
        },
        {
          id: 4,
          image: this.pictures.doorPic,
          description: this.message.doorMessage,
          symbolKey: true,
          lastSlide: false
        },
        {
          id: 5,
          image: this.pictures.seatView,
          description: this.message.seatMessage,
          lastSlide: true
        }
      ]
    }
  }

  // Method to generate the door number based off the input row
  generateDoorNumber() {
    if(this.inputSeat.row=="JJ" || this.inputSeat.row=="KK" || this.inputSeat.row=="LL" || this.inputSeat.row=="DDD" || this.inputSeat.section=="HCP: ADA Accessible") {
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
