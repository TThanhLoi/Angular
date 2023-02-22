import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-insert-node-item',
  templateUrl: './insert-node-item.component.html',
  styleUrls: ['./insert-node-item.component.css']
})
export class InsertNodeItemComponent implements OnInit {
  insertFrm:FormGroup;
  empObj:Employee=new Employee();
  constructor(
    private fb: FormBuilder,
    private itemsrv: ItemService) {
    this.insertFrm = this.fb.group({
      id:['',[Validators.required]],
      firstname:[''],
      lastname:[''],
      gender:[''],
      email:[''],
      phone:[''],
      salary:['']
    });
   }
   onSubmit(){
      this.empObj.id = this.insertFrm.controls["id"].value;
      this.empObj.firstname = this.insertFrm.controls["firstname"].value;
      this.empObj.lastname = this.insertFrm.controls["lastname"].value;
      this.empObj.gender = this.insertFrm.controls["gender"].value;
      this.empObj.email = this.insertFrm.controls["email"].value;
      this.empObj.phone = this.insertFrm.controls["phone"].value;
      this.empObj.salary = this.insertFrm.controls["salary"].value;
      this.itemsrv.insertEmployee(this.empObj).subscribe(res=>{
        console.log(res);
      },err=>{
        console.log(err);
      });
   }
  ngOnInit(): void {
    
  }

}
