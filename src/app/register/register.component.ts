import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';

export function passwordsMatchValidator():ValidatorFn{
  return (control:AbstractControl):ValidationErrors|null=>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return{
        passwordsDontMatch:true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm = new FormGroup({
    username:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',Validators.required)
  },{validators: passwordsMatchValidator() });
   
  constructor(private auth:AuthService,private router:Router,private toast:HotToastService,private afs:AngularFirestore) { }

  ngOnInit(): void {
  
  }
  get username()
   {
    return this.signupForm.get('username');
   }
  get email()
   {
    return this.signupForm.get('email');
   }

   get password()
   {
    return this.signupForm.get('password');
   }
   get confirmPassword()
   {
    return this.signupForm.get('confirmPassword');
   }
   signupsubmit()
   {
    if(!this.signupForm.valid)return;

    const{email,password}=this.signupForm.value;
    this.afs.collection("User").add(this.signupForm.value);
    this.auth.signup(email,password).pipe(
      this.toast.observe({
        success:'congrats! you are all sign up',
        loading:'signing in ...',
        error:({message})=> `${message}`
      })
    ).subscribe(()=>{
      this.router.navigateByUrl("login");
    })
     
   }
}
