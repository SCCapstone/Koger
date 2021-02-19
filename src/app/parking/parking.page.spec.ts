import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ParkingPage } from './parking.page';

describe('ParkingPage', () => {
  let component: ParkingPage;
  let fixture: ComponentFixture<ParkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
