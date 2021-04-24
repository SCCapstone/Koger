import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UpcomingEventsPage } from './upcoming-events.page';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('UpcomingEventsPage', () => {
  let component: UpcomingEventsPage;
  let fixture: ComponentFixture<UpcomingEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventsPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, AngularFireModule.initializeApp(environment.firebase), HttpClientModule],
      providers: [SocialSharing, HttpClient ]
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
