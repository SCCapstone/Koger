import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapGrandPageRoutingModule } from './map-grand-routing.module';

import { MapGrandPage } from './map-grand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapGrandPageRoutingModule
  ],
  declarations: [MapGrandPage]
})
export class MapGrandPageModule {}
