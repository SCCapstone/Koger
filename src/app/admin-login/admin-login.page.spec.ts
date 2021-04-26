import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AdminLoginPage } from './admin-login.page';

import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';

describe('AdminLoginPage', () => {
  let component: AdminLoginPage;
  let fixture: ComponentFixture<AdminLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginPage ],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase)],
      providers:[AngularFireModule, AngularFirestore, AngularFirestore, FormBuilder]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
