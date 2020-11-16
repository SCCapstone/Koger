import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapLobbyPageRoutingModule } from './map-lobby-routing.module';

import { MapLobbyPage } from './map-lobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapLobbyPageRoutingModule
  ],
  declarations: [MapLobbyPage]
})
export class MapLobbyPageModule {}
