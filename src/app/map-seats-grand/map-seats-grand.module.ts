import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSeatsGrandPageRoutingModule } from './map-seats-grand-routing.module';

import { MapSeatsGrandPage } from './map-seats-grand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSeatsGrandPageRoutingModule
  ],
  declarations: [MapSeatsGrandPage]
})
export class MapSeatsGrandPageModule {}
