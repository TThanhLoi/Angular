import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createFrm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private crudsv:CrudService,
    private router:Router) {
    this.createFrm = this.fb.group({
      name:['',[Validators.required ,Validators.minLength(4)]],
      nxb:[''],
      category:[''],
      price:[''],
      amount:[''],
    });
   }
  ngOnInit(): void {
  } 
  onSubmit(){
   this.crudsv.createbook(this.createFrm.value)
        this.router.navigateByUrl("/admin");
   }

   ResetForm() {
    this.createFrm.reset();
  }
}
