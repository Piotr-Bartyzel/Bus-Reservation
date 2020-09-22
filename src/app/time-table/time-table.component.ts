import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../interfaces/course';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

 course: Course []=[];
 detail: number = -1;
  constructor(private httpS: HttpService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses():void{

    this.httpS.getCourses().subscribe(course=>{
        console.log("aaa "+course.length)
        this.course = course;
      },
      
      err =>{
        console.log("lipaaa "+err)
})
    }

    showIt(x){
        this.detail = x;
    }
}
