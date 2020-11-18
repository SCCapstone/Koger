import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapSeatsOrchestraPage } from './map-seats-orchestra.page';

const routes: Routes = [
  {
    path: '',
    component: MapSeatsOrchestraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapSeatsOrchestraPageRoutingModule {}
