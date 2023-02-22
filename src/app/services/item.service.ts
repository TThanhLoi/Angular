import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Employee } from '../models/Employee'; 


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http:HttpClient){
  }
  
  get() {
    return this.http.get<Employee[]>('http://localhost:8000/api/items');
  }

  insertEmployee (emp:Employee):Observable<Employee>{
    const headers = { 'content-type': 'application/json'} 
					//	console.log(JSON.stringify(item))						
						return this.http.post<Employee>('http://localhost:8000/api/insert/', emp, {'headers':headers}); 
  }
    
}
