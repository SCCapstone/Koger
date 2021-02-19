import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { MapSeatsOrchestraPage } from './map-seats-orchestra.page';

describe('MapSeatsOrchestraPage', () => {
  let component: MapSeatsOrchestraPage;
  let fixture: ComponentFixture<MapSeatsOrchestraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSeatsOrchestraPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MapSeatsOrchestraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
