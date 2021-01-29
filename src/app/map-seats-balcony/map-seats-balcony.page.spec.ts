import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { MapSeatsBalconyPage } from './map-seats-balcony.page';

describe('MapSeatsBalconyPage', () => {
  let component: MapSeatsBalconyPage;
  let fixture: ComponentFixture<MapSeatsBalconyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSeatsBalconyPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MapSeatsBalconyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
