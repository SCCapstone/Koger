import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandicappedPage } from './handicapped.page';

const routes: Routes = [
  {
    path: '',
    component: HandicappedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandicappedPageRoutingModule {}
