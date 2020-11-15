import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtPageRoutingModule } from './art-routing.module';

import { ArtPage } from './art.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtPageRoutingModule
  ],
  declarations: [ArtPage]
})
export class ArtPageModule {}
