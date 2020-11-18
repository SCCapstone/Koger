import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingInfoPageRoutingModule } from './parking-info-routing.module';

import { ParkingInfoPage } from './parking-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingInfoPageRoutingModule
  ],
  declarations: [ParkingInfoPage]
})
export class ParkingInfoPageModule {}
