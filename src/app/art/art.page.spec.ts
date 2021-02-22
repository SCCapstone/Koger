import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtPage } from './art.page';

describe('ArtPage', () => {
  let component: ArtPage;
  let fixture: ComponentFixture<ArtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
