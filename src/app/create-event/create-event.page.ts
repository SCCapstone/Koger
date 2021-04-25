// Joshua Acree
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {
  public createEventForm: FormGroup;
  
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrol:AlertController, 
    private firestoreService: FirestoreService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
      this.createEventForm = formBuilder.group({
      eventName: ['', Validators.required],
      eventDescription: ['', Validators.required],
      link: ['', Validators.compose([Validators.pattern('(http|https)://kogercenterforthearts.com/(.*)'), Validators.required])],
      tag: ['', Validators.required],
      dates: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  // Various error messages for a field touched but not filled out or not following proper pattern
  validation_messages = {
    'eventName': [
      { type: 'required', message: 'Title is required.'}
    ],
    'eventDescription':[
      { type: 'required', message: 'Description is required.'}
    ],
    'link': [
      { type: 'required', message: 'Link is required.'},
      { type: 'pattern', message: 'Link must follow URL Pattern'      }
    ],
    'tag': [
      { type: 'required', message: 'Tag is required.'}
    ],
    'dates': [
      { type: 'required', message: 'Date is required.'}
    ]
  }
  // Pulls event data from forum and uses firestore service to create event in firestore
  // On creation of event it redirects to edit event page
  async createEvent() {  
    const loading = await this.loadingCtrl.create();
    
    const eventName = this.createEventForm.value.eventName;
    const eventDescription = this.createEventForm.value.eventDescription;
    const dates = this.createEventForm.value.dates;
    const link = this.createEventForm.value.link;
    const tag = this.createEventForm.value.tag;
    
    this.firestoreService.
    createEvent(eventName, eventDescription, dates, link, tag).
    then(
      () => {
        loading.dismiss().then(()=> {
          this.router.navigateByUrl('admin-dashboard');
        });
      },
      error => {
        loading.dismiss().then(() => {
          console.error(error);
        });
      }
    );
    return await loading.present();
  }

}
