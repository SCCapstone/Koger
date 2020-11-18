import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapGrandPage } from './map-grand.page';

const routes: Routes = [
  {
    path: '',
    component: MapGrandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapGrandPageRoutingModule {}
