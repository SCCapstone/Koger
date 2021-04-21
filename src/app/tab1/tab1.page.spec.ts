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
    let testIn : string = "RORC: Right Orchestra";

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
    component.setRows('RORC: Right Orchestra');
    
    component.removeRowSelection();

    expect<any>(component.seat.row).toBe(null);
    expect<any>(component.seat.seatNum).toBe(null);
  });

  /*Tests to see if HCP seating input goes thru
    loop correctly and return HCP correctly*/

  //only discrepancy i am now noticing is 
  //given any input into setRows, anything that isn't
  //R/L ORC, R/L BAL, and R/L GT will set the seats to 
  //HCP seats, but in actuality the input is controlled 
  //through the UI by providing a list of section to choose
  it('should set rows to proper HCP input', () => {
    let testIn : string = 'HCP: ADA Accessible';

    component.setRows(testIn);
    expect<any>(component.rows).toEqual(['HCP: ADA Accessible']);
  });

  /**Tests to see if rows are set correctly based on
   * given input of HCP sections
   * going to use methods to build upon each other
   */
  it('should set correct seats based on HCP input', () =>{
    let testIn : string = "Deez";

    component.setRows(testIn);
    component.setSeats(component.rows[0]);

    expect<any>(component.seats).toEqual(['HCP Left', 'HCP Right']);
  });

  /*Tests to see if seats are set based off 
    rows generated from another method*/
  it('should set correct HCP seats based on rows', () =>{
    let testIn : string = 'HCP: ADA Accessible';

    component.setRows(testIn);
    component.setSeats(testIn);
    expect<any>(component.seats).toBe(component.HCPseats);
  });

  /*Tests to see if the correct picture is selected 
   * based on seat section selection
   */
  it('should set the correct image based on section', () =>{
    component.seat.section = 'RORC: Right Orchestra';
    component.seat.row = 'E';
    component.seat.seatNum = '24';

    component.generateSectionView();
    expect<any>(component.sectionView).toEqual('<img src="../../assets/img/RORC.jpg"/>');
  });

  /**Tests to see if RHCP brings up the same as RORC
   * as defined in the ts file
   */
   it('should provide correct section view image for RHCP', () =>{
    component.seat.seatNum = 'HCP Right';

    component.generateSectionView();
    expect<any>(component.sectionView).toEqual('<img src="../../assets/img/RORC.jpg"/>');
    component.sectionView = '';
  });
  
  /*Tests to see if correct picture selected based on
   * non listed inputs
   */
  it('should select uofsc logo given insignificant input', () =>{
    component.seat.section = 'random';

    component.generateSectionView();
    expect<any>(component.sectionView).toEqual('<img src="../../assets/img/uofsclogo.jpg"/>');
  });

  /**Tests to see if remove seat selection method 
   * works properly
   */
  it('should remove seat selection properly', () =>{
    component.seat.seatNum = '14';

    component.removeSeatSelection();
    expect<any>(component.seat.seatNum).toEqual(null);
  });
});
