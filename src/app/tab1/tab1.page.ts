import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  seat = {
    section: '',
    row: '',
    seatNum: null 
  }

  sections = [
    'RORC', 'LORC', 'RGTR', 'LGTR', 'RBAL', 'LBAL', 'HC'
  ]
  rows: string[];

  ORCrows = [ 
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'
  ]
  GTRrows = [ 
    'AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ', 'KK', 'LL'
  ]
  BALrows = [
    'AAA', 'BBB', 'CCC', 'DDD'
  ]

  setRows(inputSection: string) {
    if(this.seat.row!=null) {
      this.removeRowSelection();
    }
    if(inputSection=="RORC" || inputSection=="LORC") {
      this.rows = this.ORCrows;
    } else if(inputSection=="RGTR" || inputSection=="LGTR") {
      this.rows = this.GTRrows;
    } else if(inputSection=="RBAL" || inputSection=="LBAL") {
      this.rows = this.BALrows;
    } else {
      this.rows = ['HC'];
    }
  }

  removeRowSelection() {
    this.seat.row=null;
  }

}
