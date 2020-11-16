import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSeatsOrchestraPageRoutingModule } from './map-seats-orchestra-routing.module';

import { MapSeatsOrchestraPage } from './map-seats-orchestra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSeatsOrchestraPageRoutingModule
  ],
  declarations: [MapSeatsOrchestraPage]
})
export class MapSeatsOrchestraPageModule {}
