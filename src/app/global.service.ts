import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public fullHeight:number = 0;
  public logOn = false;
  public typMenu = -1;
  constructor() { }

  getUserId():number{
    let user = JSON.parse(localStorage.getItem("currentUser"));
    return user["token"]["user_id"];
  }

  getPos(){
    let user = JSON.parse(localStorage.getItem("currentUser"));
    return user["token"]["typ"];
  }
}
