import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingInfoPage } from './parking-info.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingInfoPageRoutingModule {}
