import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingEventsPage } from './upcoming-events.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingEventsPageRoutingModule {}
