import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'upcoming-events',
    loadChildren: () => import('./upcoming-events/upcoming-events.module').then( m => m.UpcomingEventsPageModule)
  },
  {
    path: 'art',
    loadChildren: () => import('./art/art.module').then( m => m.ArtPageModule)
  },
  {
    path: 'parking',
    loadChildren: () => import('./parking/parking.module').then( m => m.ParkingPageModule)
  },
  {
    path: 'handicapped',
    loadChildren: () => import('./handicapped/handicapped.module').then( m => m.HandicappedPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
