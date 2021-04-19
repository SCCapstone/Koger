
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, } from '@angular/forms';
import { NavController, ModalController, Platform } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { AdminLoginPage } from '../admin-login/admin-login.page';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/data/firestore.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
//import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {


  constructor(

    private emailComposer: EmailComposer,
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private route: Router,
    private modalController: ModalController,
    public platform: Platform,
    private firestoreService: FirestoreService,
    private callNumber: CallNumber
    
  ) {}
  
  jumpToLogin()
  {
    if(!this.firestoreService.isLoggedIn) {
      this.route.navigate(['../admin-login']);
    } else {
      this.route.navigate(['../admin-dashboard']);
    }
  }
  jumpToEvents()
  {
    this.route.navigate(['../upcoming-events']);
  }

  jumpToArt()
  {
    this.route.navigate(['../art']);
  }

  jumpToParking()
  {
    this.route.navigate(['../parking']);
  }

  jumpToHandicapped()
  {
    this.route.navigate(['../handicapped']);
  }

  sendEmail()
  {
    let email = {
      to: 'kogercenter@sc.edu',
      subject: 'Koger Center App Customer Feedback',
      body: 'Dear Koger Center, ',
      isHtml: true
    }
    // Send a text message using default options
    this.emailComposer.open(email);
  }

  callPhone() {
    this.callNumber.callNumber("18037777500", true).then(res => console.log('Launched dialer!', res)).catch(err => console.log('Error launching dialer', err));
  }

  /*openUrl(){
    this.platform.ready().then(() => {
      let browser = new InAppBrowser("https://itkt.choicecrm.net/templates/USCK/#/events", '_blank');
    })
  }*/

}
