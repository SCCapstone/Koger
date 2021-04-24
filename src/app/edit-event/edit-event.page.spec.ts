import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { EditEventPage } from './edit-event.page';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

describe('EditEventPage', () => {
  let component: EditEventPage;
  let fixture: ComponentFixture<EditEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventPage ],
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)],
      providers: [FormBuilder, Router]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
