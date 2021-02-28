import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';
import { Message } from '../shared/message';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-send-push',
  templateUrl: './send-push.page.html',
  styleUrls: ['./send-push.page.scss'],
})
export class SendPushPage implements OnInit {
  public message: Observable<Message[]>

  public sendPushForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertController:AlertController, 
    private firestoreService: FirestoreService,
    formBuilder: FormBuilder, 
    private router: Router) { 
      this.sendPushForm = formBuilder.group({
        pushTitle: ['', Validators.required],
        pushBody: ['', Validators.required]
      });
    }

  ngOnInit() {
    this.message = this.firestoreService.getLastMessage();
  }

  sendPushNotif() {
    const pushTitle = this.sendPushForm.value.pushTitle;
    const pushBody = this.sendPushForm.value.pushBody;
    this.firestoreService.updateMessage(pushTitle, pushBody);
    this.confirmation();
  }

  async confirmation() {
    const alert = await this.alertController.create({
      header: 'Push Notification will send out shortly!',
      buttons: [ {
          text: 'Ok',
          handler: () => {
            console.log('CONFIRM OK');
          }
        }
      ]
    });

    await alert.present();
  }

}
