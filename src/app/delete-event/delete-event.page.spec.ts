import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { DeleteEventPage } from './delete-event.page';

describe('DeleteEventPage', () => {
  let component: DeleteEventPage;
  let fixture: ComponentFixture<DeleteEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEventPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
