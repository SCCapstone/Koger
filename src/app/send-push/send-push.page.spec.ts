import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';
import { SendPushPage } from './send-push.page';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



describe('SendPushPage', () => {
  let component: SendPushPage;
  let fixture: ComponentFixture<SendPushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPushPage ],
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)],
      providers: [FormBuilder, Router]
    }).compileComponents();

    fixture = TestBed.createComponent(SendPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
