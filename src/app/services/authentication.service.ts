import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private afAuth: AngularFireAuth
    ) { }
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
    return new Promise((resolve, reject) => {
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
}
