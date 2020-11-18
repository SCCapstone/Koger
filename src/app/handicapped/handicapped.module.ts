import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandicappedPageRoutingModule } from './handicapped-routing.module';

import { HandicappedPage } from './handicapped.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandicappedPageRoutingModule
  ],
  declarations: [HandicappedPage]
})
export class HandicappedPageModule {}
