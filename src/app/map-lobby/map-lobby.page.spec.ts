import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { MapLobbyPage } from './map-lobby.page';

describe('MapLobbyPage', () => {
  let component: MapLobbyPage;
  let fixture: ComponentFixture<MapLobbyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLobbyPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MapLobbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
