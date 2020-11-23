import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators} from '@angular/forms';
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
    formBuilder: FormBuilder, 
    private router: Router
    ) { 
      this.createEventForm = formBuilder.group({
      eventName: ['', Validators.required],
      eventDescription: ['', Validators.required],
      link: ['', Validators.required],
      tag: ['', Validators.required],
      dates: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
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
          this.router.navigateByUrl('');
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
