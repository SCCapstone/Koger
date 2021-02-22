import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HandicappedPage } from './handicapped.page';

describe('HandicappedPage', () => {
  let component: HandicappedPage;
  let fixture: ComponentFixture<HandicappedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandicappedPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HandicappedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
