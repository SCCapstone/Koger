import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { MapBalconyPage } from './map-balcony.page';

describe('MapBalconyPage', () => {
  let component: MapBalconyPage;
  let fixture: ComponentFixture<MapBalconyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBalconyPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(MapBalconyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
