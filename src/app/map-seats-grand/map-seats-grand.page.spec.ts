import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapSeatsGrandPage } from './map-seats-grand.page';

describe('MapSeatsGrandPage', () => {
  let component: MapSeatsGrandPage;
  let fixture: ComponentFixture<MapSeatsGrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSeatsGrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapSeatsGrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
