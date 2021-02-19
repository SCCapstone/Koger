import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ParkingInfoPage } from './parking-info.page';

describe('ParkingInfoPage', () => {
  let component: ParkingInfoPage;
  let fixture: ComponentFixture<ParkingInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingInfoPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
