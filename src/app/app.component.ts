import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Course } from './interfaces/course';
import { GlobalService } from './global.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  kontaPracownikow: String;
  kontaKlientow: String
  kontoWlasciciela: String = 'main';
  check: number=0;
  temp: boolean = false;
  course: Course;

  constructor(public global: GlobalService){}

  @ViewChild('navig')
  navig: ElementRef;

  @ViewChild('head')
  head: ElementRef;

  ngOnInit(){
      if(this.global.getPos()){
        let it = this.global.getPos();
        if(it === "Sekretariat") this.global.typMenu = 3;
        else if(it === "Admin") this.global.typMenu = 1;
        else if(it === "Kierowca") this.global.typMenu = 2;
        else this.global.typMenu = 0;
      }
  }

  ngAfterViewInit(){
    const fullHeight = this.navig.nativeElement.offsetHeight + this.head.nativeElement.offsetHeight
    this.global.fullHeight = fullHeight;

  }

  change(x){
    this.check = x;
  }

  scroll(x){
        this.check=x;    
  }

  readLocalStorage(){
    return localStorage.getItem('currentUser');
  }

  signOut(){
         localStorage.removeItem('currentUser');
         this.global.typMenu = -1;
  }
}
