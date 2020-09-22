import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Worker1 } from '../interfaces/worker';
import { Bus } from '../interfaces/bus';
import { Way } from '../interfaces/way';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course2 } from '../interfaces/c2';
import { Rota } from '../interfaces/rota';
import { Rota2 } from '../interfaces/rota2';
import { Prize2 } from '../interfaces/prize';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent implements OnInit {

  workers: Worker1[] = [];
  buses: Bus[] = [];
  ways: Way[] = [];
  set1Form: FormGroup;
  set2Form: FormGroup;
  graForm: FormGroup;
  pForm: FormGroup;
  message: Course2;
  mesP: Prize2;
  rota: Rota[] = [];
  idArray: number;
  vis: number = 0;
  red: Boolean = false;
  response: string;

  constructor(private httpS: HttpService) { }

  ngOnInit(): void {

    this.getWorker();

    this.set1Form = new FormGroup({
      InputDate: new FormControl(null, Validators.required),
      InputTime: new FormControl(null, Validators.required),
      InputWorker: new FormControl(null, Validators.required),
      InputBus: new FormControl(null, Validators.required),
      InputWay: new FormControl(null, Validators.required),
    })

    this.set2Form = new FormGroup({
      InputStop: new FormControl(null, Validators.required),
    })

    this.pForm = new FormGroup({
      InputP: new FormControl(null, Validators.required),
      InputPk: new FormControl(null, Validators.required),
    })

  }

  setVisible(x) {
    this.vis = x;
    this.response = "";
  }

  onSubmit1() {
    console.log(this.set1Form)
    this.message = {
      data: this.set1Form.value.InputDate,
      godzina: this.set1Form.value.InputTime,
      id_pracownika: this.set1Form.value.InputWorker,
      id_pojazdu: this.set1Form.value.InputBus,
      id_trasy: this.set1Form.value.InputWay
    }

    this.httpS.addCourse(this.message).subscribe(resp => {
      this.red = false;
      this.response = resp;
    },

      err => {
        this.red = true;
        this.response = "Wprowadź poprawne dane!"
      })
  }

  onSubmit2() {
    let nazwaPrzystanku = this.set2Form.value.InputStop;
    this.httpS.addStop({ nazwaPrzystanku }).subscribe(resp => {
      this.red = false;
      this.response = resp;
    },
      err => {
        this.red = true;
        this.response = "Wprowadź poprawne dane!"
      })
  }



  onSubmit4() {
    this.mesP = {
      nagNazwa: this.pForm.value.InputP,
      nagPunkty: this.pForm.value.InputPk
    }
    this.httpS.addPrize(this.mesP).subscribe(resp => {
      this.response = resp;
    },
      err => {
        this.response = "Błąd!";
      })
  }

  private getWorker(): void {

    this.httpS.getWorker().subscribe(workers => {
      this.workers = workers;
    },
      err => {
      })

    this.httpS.getBuses().subscribe(buses => {
      this.buses = buses;
    },
      err => {
      })

    this.httpS.getWays().subscribe(ways => {
      this.ways = ways;
    },
      err => {
      })
  }
}
