import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapBalconyPage } from './map-balcony.page';

const routes: Routes = [
  {
    path: '',
    component: MapBalconyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapBalconyPageRoutingModule {}
