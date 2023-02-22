import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'; 
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth:AngularFireAuth,
    public db: AngularFirestore
  ) { }
  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      this.auth.onAuthStateChanged(function(user){
      if (user) {
        resolve(user);
      } else {				 
        reject('No user logged in');
      }
      })
  })
}

}
