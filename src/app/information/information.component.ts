import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  nazwaFirmy: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onStart() {
    this.router.navigate(['/zaloguj']);
  }
}
