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
  },
  {
    path: 'map-lobby',
    loadChildren: () => import('./map-lobby/map-lobby.module').then( m => m.MapLobbyPageModule)
  },
  {
    path: 'map-seats-orchestra',
    loadChildren: () => import('./map-seats-orchestra/map-seats-orchestra.module').then( m => m.MapSeatsOrchestraPageModule)
  },
  {
    path: 'map-grand',
    loadChildren: () => import('./map-grand/map-grand.module').then( m => m.MapGrandPageModule)
  },
  {
    path: 'map-seats-grand',
    loadChildren: () => import('./map-seats-grand/map-seats-grand.module').then( m => m.MapSeatsGrandPageModule)
  },
  {
    path: 'map-balcony',
    loadChildren: () => import('./map-balcony/map-balcony.module').then( m => m.MapBalconyPageModule)
  },
  {
    path: 'map-seats-balcony',
    loadChildren: () => import('./map-seats-balcony/map-seats-balcony.module').then( m => m.MapSeatsBalconyPageModule)
  },
  {
    path: 'seat-description',
    loadChildren: () => import('./seat-description/seat-description.module').then( m => m.SeatDescriptionPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  },  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'delete-event',
    loadChildren: () => import('./delete-event/delete-event.module').then( m => m.DeleteEventPageModule)
  },
  {
    path: 'send-push',
    loadChildren: () => import('./send-push/send-push.module').then( m => m.SendPushPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
