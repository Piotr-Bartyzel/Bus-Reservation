import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { User } from '../interfaces/user';
import { Rota } from '../interfaces/rota';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] =[];
  rota: Rota[] = [];

  constructor(private httpS: HttpService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getRota();
  }

  getUsers(){
    this.httpS.getUsers().subscribe(users=>{
      console.log("Pracownicy "+users.length)
      this.users = users;
    },
    
    err =>{
      console.log("worker problem "+err)
  })
  }

  getRota():void{
    this.httpS.getRota().subscribe(rota=>{
      console.log("rota "+rota.length)
      this.rota = rota;
    },
    
    err =>{
      console.log("rota problem "+err)
  })
  }
}
