import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteEventPage } from './delete-event.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteEventPageRoutingModule {}
