import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-nodeitem',
  templateUrl: './nodeitem.component.html',
  styleUrls: ['./nodeitem.component.css']
})
export class NodeitemComponent implements OnInit {

  emplist1:Employee[]=[]
  config:any;

  constructor(private itemService:ItemService) 
  {
    

    console.log("count of item"+this.emplist1.length);
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.emplist1.length
      };
  }

  ngOnInit(): void {
    this.get();
  }

  pageChanged(event:number){
    this.config.currentPage = event;
  }

  get() {
    this.itemService.get().subscribe((data) => {
      this.emplist1 = data;
    });
  }
}
