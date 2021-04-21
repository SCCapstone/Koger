import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { rejects } from 'assert';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  userData: any;

  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore

    ) { 
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData))
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
    }
  // Logs user in using firebase signIn method if it doesnt match then reject
  loginUser(value)
  {
    return new Promise<any>((resolve, reject)=>
    {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }
  // Logs out user and returns to console that user is logged out
  logoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.afAuth.currentUser) {
        this.afAuth.signOut()
        .then(() => {
          console.log("Logged Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
  // Returns user data from current user
  userDetails(){
    return this.afAuth.user
  }

  // Creates user in firestore under user tab
  SetUserData(user)
  {
      const userRef: AngularFirestoreDocument<any> = this.afStore.doc('users/${user.uid}');
      const userData: User = {
        uid: user.uid,
        email: user.email,
      }
      return userRef.set(userData, {
        merge: true
      })
  }

  // Checks to see if a user exists
  userExists(){
    if(this.userData.id != null) {
      return true;
    }
    else {
      return false;
      }
  }
}
