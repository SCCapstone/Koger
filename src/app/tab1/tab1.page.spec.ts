import { Component, NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SeatDescriptionPage } from '../seat-description/seat-description.page';

import { FormBuilder } from '@angular/forms';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { RouterTestingModule } from '@angular/router/testing';


import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule, RouterTestingModule],
      providers: [BarcodeScanner, FormBuilder]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //simple unit test making sure seat is defined in ts file
  it('should have a seat class member' , () => {
    expect(component.seat).toBeDefined();
  });

  /*Tests setRows to make sure rows are assigned
    properly based on given input in related ts file 
  */
  it('should track the proper assignment of rows based on user input', () =>{
    let testIn : string = "RORC";

    component.setRows(testIn);

    expect<any>(component.rows).toBe(component.ORCrows);
  });

  /*Tests setSeats to make sure seats are assigned
    properly based on given input in related ts file
   */
  it('should track the proper assignment of seats based on user input', () =>{
    let testIn : string = "AA";

    component.setSeats(testIn);

    expect<any>(component.seats).toBe(component.AAseats);
  });

  /*Tests setSeats error checking functionality when
    given improper input
   */
  it('should provide an error upon improper seat input', () =>{
    let testIn : string = "X";

    component.setSeats(testIn);

    expect<any>(component.seats).toEqual(['Invalid Section/Row']);
  });

  /*Tests removeRowSelection functionality
    that should set seat selection to null
   */
  it('should nullify row selection', () => {
    component.setRows('RORC');
    
    component.removeRowSelection();

    expect<any>(component.seat.row).toBe(null);
    expect<any>(component.seat.seatNum).toBe(null);
  });
});
