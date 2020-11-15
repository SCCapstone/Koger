import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingEventsPageRoutingModule } from './upcoming-events-routing.module';

import { UpcomingEventsPage } from './upcoming-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingEventsPageRoutingModule
  ],
  declarations: [UpcomingEventsPage]
})
export class UpcomingEventsPageModule {}
