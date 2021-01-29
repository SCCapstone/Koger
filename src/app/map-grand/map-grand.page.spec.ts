import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { MapGrandPage } from './map-grand.page';

describe('MapGrandPage', () => {
  let component: MapGrandPage;
  let fixture: ComponentFixture<MapGrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGrandPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MapGrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
