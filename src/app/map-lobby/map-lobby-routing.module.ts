import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapLobbyPage } from './map-lobby.page';

const routes: Routes = [
  {
    path: '',
    component: MapLobbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapLobbyPageRoutingModule {}
