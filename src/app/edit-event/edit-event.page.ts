import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {
  eventData;
  public editEventForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrol:AlertController, 
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder, 
    private router: Router) { 
      this.editEventForm = formBuilder.group({
        eventName: ['', Validators.required],
        description: ['', Validators.required],
        dates: ['', Validators.required],
        link: ['', Validators.required],
        tag: ['', Validators.required]
      });
    }

  ngOnInit() {
  }
  async editEvent() {
    const loading = await this.loadingCtrl.create();
    
    const eventName = this.editEventForm.value.eventName;
    const description = this.editEventForm.value.description;
    const dates = this.editEventForm.value.dates;
    const link = this.editEventForm.value.link;
    const tag = this.editEventForm.value.tag;

    this.firestoreService.
    editEvent(eventName, description, dates, link, tag).
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
