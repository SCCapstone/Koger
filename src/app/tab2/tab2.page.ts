import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //unit test variables
  num : number = 10;
  result : number = 0;
  stringRes : string = '';

  constructor(
    private route: Router,
    private navCtrl: NavController,
    ) {}

    jumpToMapLobby()
    {
      this.route.navigate(['../map-lobby']);
    }

    jumpToMapOrchestra()
    {
      this.route.navigate(['../map-seats-orchestra']);
    }

    jumpToMapGrand()
    {
      this.route.navigate(['../map-grand']);
    }

    jumpToMapSeatsGrand()
    {
      this.route.navigate(['../map-seats-grand']);
    }

    jumpToMapBalcony()
    {
      this.route.navigate(['../map-balcony']);
    }

    jumpToMapSeatsBalcony()
    {
      this.route.navigate(['../map-seats-balcony']);
    }

    //Some silly methods to be called by testing spec file
    
    //this silly test sets a class attribute to the input times
    //another class attribute
    doSomething(input : number){
       this.result = input * this.num;
    }

    //this test returns a string based on boolean input
    doSomething2(input : boolean){
      if(input){
        return "Success!";
      }
      else{
        return "Failure";
      }
    }

    //this test returns a string concatonated with input
    doSomething3(input : string){
      return input + "nice!";
    }

    //this test returns a string based on string input
    doSomething4(input : string){
      if(input == "password"){
       return "Welcome!";
      }
      else{
       return "Wrong password";
      }
    }

    //this test returns the remainder of input
    //when divided by 2
    doSomething5(input : number){
      return input % 2;
    }

    //This test returns first character of given input
    doSomething6(input : string){
      return input.charAt(0);
    }

    //this test returns value at given index of an array
    doSomething7(input : number[], index : number){
      return input[index];
    }
}

