import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatDescriptionPage } from './seat-description.page';

const routes: Routes = [
  {
    path: '',
    component: SeatDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatDescriptionPageRoutingModule {}
