import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { SeatDescriptionPage } from './seat-description.page';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


describe('SeatDescriptionPage', () => {
  let component: SeatDescriptionPage;
  let fixture: ComponentFixture<SeatDescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatDescriptionPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, ExploreContainerComponentModule]
    }).compileComponents();
  }));

  beforeEach(async(() =>{
    fixture = TestBed.createComponent(SeatDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  }));
});
