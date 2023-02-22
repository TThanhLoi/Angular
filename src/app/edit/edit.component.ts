import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  UpdateFrm: FormGroup;
  bookref: any
  constructor(private fb: FormBuilder,
    private crudsv: CrudService,
    private router: Router,
    private activeroute: ActivatedRoute) {
    this.UpdateFrm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      nxb: [''],
      category: [''],
      price: [''],
      amount: [''],
    });
  }

  ngOnInit(): void {
    const id = this.activeroute.snapshot.paramMap.get('id')
    this.crudsv.getbookbyid(id).subscribe(res => {
      this.bookref = res
      this.UpdateFrm = this.fb.group({
        name: [this.bookref.name],
        nxb: [this.bookref.nxb],  
        category: [this.bookref.category],
        price: [this.bookref.price],
        amount: [this.bookref.amount],
      })
    })
  }
  onSubmit() {
    const id = this.activeroute.snapshot.paramMap.get('id')
    this.crudsv.updatebook(this.UpdateFrm.value, id)
    this.router.navigateByUrl("/admin")
  }
}
