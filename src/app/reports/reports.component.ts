import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Report } from '../interfaces/report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  report: Report [] = [];

  constructor(private httpS: HttpService) { }

  ngOnInit(): void {
    this.getReports();
  }

  getReports(){
    this.httpS.getReports().subscribe(res=>{
      this.report = res;
    },
    
    err =>{
  })
  }

}
