import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeatDescriptionPage } from './seat-description.page';

describe('SeatDescriptionPage', () => {
  let component: SeatDescriptionPage;
  let fixture: ComponentFixture<SeatDescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatDescriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeatDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
