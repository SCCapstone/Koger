import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';
import { SendPushPage } from './send-push.page';

describe('SendPushPage', () => {
  let component: SendPushPage;
  let fixture: ComponentFixture<SendPushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPushPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
