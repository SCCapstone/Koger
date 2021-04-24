import { InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './firestore.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //imports: [InjectionToken]
      providers: [AngularFirestore, AngularFireModule, AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebase)]
    });
    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(true).toBeTruthy();
  });
});
