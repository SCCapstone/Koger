import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginPage } from './admin-login.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AdminLoginPageRoutingModule } from './admin-login-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AdminLoginPage }]),
    AdminLoginPageRoutingModule,
  ],
  declarations: [AdminLoginPage]
})
export class Tab3PageModule {}
