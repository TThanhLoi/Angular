import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { from, switchMap } from 'rxjs';
import { User } from '../models/User';
import { SharingService } from './sharing.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authstate: any = null;
  constructor(private afAuth:AngularFireAuth,private router:Router,private sharing:SharingService) {}

 
  login(email:string,password:string)
  {
    return from(this.afAuth.signInWithEmailAndPassword(email,password))
  }
  signup(email:string,password:string){
    return from(this.afAuth.createUserWithEmailAndPassword(email,password))
  }

  ///gmail
  async signinGmail(){
    var provider = new firebase.auth.GoogleAuthProvider();
    return await  this.afAuth.signInWithPopup(provider).then(
      res=>{this.sharing.isUserLoggedIn.next(true)}
    );
      //       .then(res=>{
      //         console.log(" da dang nhap thanh cong")
      // })
  }
  logout(){
    return new Promise<any>((resolve,reject)=>{
      if (this.afAuth.user){
      //if (this.fauth.auth.currentUser){
  
      this.afAuth.signOut();
      this.sharing.isUserLoggedIn.next(false);
      //resolve("log out");
      }else{
      reject();
      }
  
    })
  }
}