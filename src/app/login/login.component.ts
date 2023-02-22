import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import{HotToastService}from'@ngneat/hot-toast'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  });
  
  constructor(private auth:AuthService,private router:Router,private toast:HotToastService) { }

  ngOnInit(): void {
  }
  tryGoogleLogin(){
    this.auth.signinGmail()
     .then(res=>{
       console.log("login thanh cong");
        this.router.navigateByUrl("admin");
        
       }).catch(err=>{console.log(err)})
   }
   
   get email()
   {
    return this.loginForm.get('email');
   }

   get password()
   {
    return this.loginForm.get('password');
   }
   

   submitf(){
    
    if(!this.loginForm.valid){
      return;
    }

    const{email,password} = this.loginForm.value;
    this.auth.login(email,password).pipe(
      this.toast.observe({
        success:'logged in successfully',
        loading:'logging in ...',
        error:'there was an error'
      })
    ).subscribe(()=>{
      this.router.navigateByUrl("admin");
    });
  }
}
