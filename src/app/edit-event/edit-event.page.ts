import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { FirestoreService } from '../services/data/firestore.service';

interface EventData {
  Name: string;
  Age: number;
  Address: string;
}

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {
  eventList = [];
  eventData: EventData;
  public editEventForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrol:AlertController, 
    private firestoreService: FirestoreService,
    public formBuilder: FormBuilder, 
    private router: Router) { 
      this.eventData = {} as EventData;
    }

  ngOnInit() {
    this.editEventForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      description: ['', Validators.required],
      dates: ['', Validators.required],
      link: ['', Validators.required],
      tag: ['', Validators.required]
    });
    this.firestoreService.read_events().subscribe(data => {
      this.eventList = data.map(e => {
        return {
          isEdit: false,
          title: e.payload.doc.data()['title'],
          description: e.payload.doc.data()['description'],
          dates: e.payload.doc.data()['dates'],
          link: e.payload.doc.data()['link'],
          tag: e.payload.doc.data()['tag']
        };
      })
      console.log(this.eventList);
    });
  }
  /* async editEvent() {
    const loading = await this.loadingCtrl.create();

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
  } */
  EditEvent(event)
  {
    event.isEdit = true;
    event.EditTitle = event.title;
    event.EditDates = event.dates;
    event.EditDescription = event.description;
    event.EditTag = event.tag;
    event.EditLink = event.link;
  }
  UpdateEvent(eventRow) {
    let event = {};
    event['title'] = eventRow.EditTitle;
    event['description'] = eventRow.EditDescription;
    event['date'] = eventRow.EditDates;
    event['tag'] = eventRow.EditTag;
    event['link'] = eventRow.EditLink;
    this.firestoreService.editEvent(event['title'], event['description'], event['date'], event['link'], event['tag']);
    eventRow.isEdit = false;
  }
} 
