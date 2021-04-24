import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Config, IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { RouterTestingModule } from '@angular/router/testing';
import { Tab3Page } from './tab3.page';
import { environment } from 'src/environments/environment';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormBuilder } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number/ngx';


describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page,],
      imports: [IonicModule.forRoot(),
        ExploreContainerComponentModule, 
        RouterTestingModule, 
        AngularFireAuthModule, 
        AngularFireModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase)],
      providers: [AngularFireAuthModule, EmailComposer, FormBuilder, CallNumber]
    }).compileComponents();
  }));

  beforeEach(async(() =>{
    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});