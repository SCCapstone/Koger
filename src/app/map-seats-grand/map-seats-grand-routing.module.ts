import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSeatsGrandPage } from './map-seats-grand.page';

const routes: Routes = [
  {
    path: '',
    component: MapSeatsGrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSeatsGrandPageRoutingModule {}
