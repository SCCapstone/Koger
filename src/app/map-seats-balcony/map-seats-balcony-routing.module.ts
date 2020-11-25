import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSeatsBalconyPage } from './map-seats-balcony.page';

const routes: Routes = [
  {
    path: '',
    component: MapSeatsBalconyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSeatsBalconyPageRoutingModule {}
