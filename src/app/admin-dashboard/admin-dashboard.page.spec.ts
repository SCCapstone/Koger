import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminDashboardPage } from './admin-dashboard.page';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Tab3Page } from '../tab3/tab3.page';


describe('AdminDashboardPage', () => {
  let component: AdminDashboardPage;
  let fixture: ComponentFixture<AdminDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([
        { path: 'tab3', component: Tab3Page }
 ]),, AngularFireModule.initializeApp(environment.firebase)],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
