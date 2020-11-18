import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatDescriptionPageRoutingModule } from './seat-description-routing.module';

import { SeatDescriptionPage } from './seat-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatDescriptionPageRoutingModule
  ],
  declarations: [SeatDescriptionPage]
})
export class SeatDescriptionPageModule {}
