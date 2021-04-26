import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab2Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //silly unit tests, tried putting them in the home app page
  //but that just threw more failing tests due to 
  //some NullInjector error with Firebase
  it('should pass this silly multiplication test', () => {
    let testIn : number = 10;
    component.doSomething(testIn);
    expect<any>(component.result).toEqual(100);
  });

  //dosomething2
  it('should pass this other silly test', () =>{
    let result : string = '';

    result = component.doSomething2(false);
    expect<any>(result).toEqual("Failure");
  });

  //dosomething3
  it('should pass this silly test', () => {
    let testIn : string = "bro";
    let testOut = component.doSomething3(testIn);
    expect<any>(testOut).toEqual("bronice!");
  });

  //dosomething4
  it('should pass this other silly test', () =>{
    let result : string = '';
    let testIn : string = "guest";
    result = component.doSomething4(testIn);
    expect<any>(result).toEqual("Wrong password");
  });

  //dosomething5
  it('should pass this test as well', () =>{
    let testIn : number = 7;
    let result : number = component.doSomething5(testIn);
    expect<any>(result).toEqual(1);
  });

  //dosomething6
  it('should pass another silly test', () =>{
    let testIn : string = "superman";
    let result : string = component.doSomething6(testIn);
    expect<any>(result).toEqual("s");
  });

  //dosomething7
  it('should pass this final silly test', () =>{
    let testIn : number[] = [12, 34, 55, 23];
    let testIndex : number = 3;

    let result : number = component.doSomething7(testIn, testIndex);
    expect<any>(result).toEqual(23);
  });
});
