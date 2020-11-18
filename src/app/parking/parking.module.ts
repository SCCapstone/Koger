import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingPageRoutingModule } from './parking-routing.module';

import { ParkingPage } from './parking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingPageRoutingModule
  ],
  declarations: [ParkingPage]
})
export class ParkingPageModule {}
