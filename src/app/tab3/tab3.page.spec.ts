import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { RouterTestingModule } from '@angular/router/testing';
import { Tab3Page } from './tab3.page';


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
        AngularFirestoreModule],
      providers: [AngularFireAuthModule]
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