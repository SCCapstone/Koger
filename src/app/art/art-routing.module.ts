import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtPage } from './art.page';

const routes: Routes = [
  {
    path: '',
    component: ArtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtPageRoutingModule {}
