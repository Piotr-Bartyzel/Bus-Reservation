import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  telefon: string = "123 456 789";
  email: string = "kkbus@kkbus.pl";
  adres: string = "Miła 12 Kraków";

  constructor() { }

  ngOnInit(): void {
  }

}
