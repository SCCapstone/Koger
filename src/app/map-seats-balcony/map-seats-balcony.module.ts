import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSeatsBalconyPageRoutingModule } from './map-seats-balcony-routing.module';

import { MapSeatsBalconyPage } from './map-seats-balcony.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSeatsBalconyPageRoutingModule
  ],
  declarations: [MapSeatsBalconyPage]
})
export class MapSeatsBalconyPageModule {}
