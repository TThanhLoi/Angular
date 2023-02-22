import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs:AngularFirestore) { }

  getbook()
  {
    return this.afs.collection("book").snapshotChanges()
  }
  getbookbyid(id:string)
  {
    return this.afs.collection("book").doc(id).valueChanges()
  }
  createbook(item:Item)
  {
    return new Promise<any>((resolve,reject)=>{
    this.afs.collection("book").add(item).then((Response)=>{
      console.log(Response)
    },
    (error)=>{
      reject(error)
    })
  })
}
  updatebook(item:Item,id:string)
  {
    return this.afs.collection("book")
    .doc(id)
    .update({
      name:item.name,
      nxb:item.nxb,
      category:item.category,
      price:item.price,
      amount:item.amount,
    });
  }
  deletebook(item:Item)
  {
    return this.afs
    .collection("book") 
    .doc(item.id)
    .delete();
  }
}
