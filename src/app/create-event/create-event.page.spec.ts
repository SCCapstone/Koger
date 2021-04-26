import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateEventPage } from './create-event.page';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormBuilder } from '@angular/forms';

describe('CreateEventPage', () => {
  let component: CreateEventPage;
  let fixture: ComponentFixture<CreateEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
