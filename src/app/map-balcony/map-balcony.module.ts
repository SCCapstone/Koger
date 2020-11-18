import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapBalconyPageRoutingModule } from './map-balcony-routing.module';

import { MapBalconyPage } from './map-balcony.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapBalconyPageRoutingModule
  ],
  declarations: [MapBalconyPage]
})
export class MapBalconyPageModule {}
