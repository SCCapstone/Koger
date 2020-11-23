import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.page.html',
  styleUrls: ['./delete-event.page.scss'],
})
export class DeleteEventPage implements OnInit {
  public deleteEventForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrol:AlertController, 
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder, 
    private router: Router) { 
      this.deleteEventForm = formBuilder.group({
        eventName: ['', Validators.required]
      });
    }

  ngOnInit() {
  }
  async deleteEvent() {  
    const loading = await this.loadingCtrl.create();
    
    const eventName = this.deleteEventForm.value.eventName;

    this.firestoreService.
    deleteEvent(eventName).
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
