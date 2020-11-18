import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seat-description',
  templateUrl: './seat-description.page.html',
  styleUrls: ['./seat-description.page.scss'],
})
export class SeatDescriptionPage implements OnInit {

  inputSeat: any;

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
  }

}
