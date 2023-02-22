import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Item } from '../models/Item';
import { NgxPaginationModule } from 'ngx-pagination';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Items1:Item[]=[];
  config:any;
  constructor(private readonly afs: AngularFirestore,private crudsv:CrudService) 
  { 
      console.log("count of item"+this.Items1.length);
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.Items1.length
      };
    };
  
  ngOnInit(): void {
    this.crudsv.getbook().subscribe((res)=>{
      this.Items1=res.map((e)=>{
        return{
          id:e.payload.doc.id,
          ...(e.payload.doc.data()as Item)
        };
      });
      console.log(this.Items1)
    });
  }
  
  delete = (item:Item) => this.crudsv.deletebook(item);
 
  pageChanged(event:number){
    this.config.currentPage = event;
  }


}
