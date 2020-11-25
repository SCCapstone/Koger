import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingPage } from './parking.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingPageRoutingModule {}
