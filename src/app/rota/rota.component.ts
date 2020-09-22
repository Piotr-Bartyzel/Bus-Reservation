import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rota2 } from '../interfaces/rota2';
import { Rota } from '../interfaces/rota';
import { Worker1 } from '../interfaces/worker';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.css']
})
export class RotaComponent implements OnInit {

  graForm: FormGroup;
  mesG: Rota2;
  rota: Rota[] = [];
  refresh: any;
  workers2: Worker1[] = [];

  constructor(private httpS: HttpService) { }

  ngOnInit(): void {
    this.getRota();
    this.getWorker2();

    this.graForm = new FormGroup({
      InputG: new FormControl(null),
      InputTime: new FormControl(null, Validators.required),
      InputW: new FormControl(null, Validators.required),
      InputDate: new FormControl(null, Validators.required),
    })

    this.refresh = setInterval(() => {
      this.getRota();
    }, 500)

  }

  ngOnDestroy(): void {
    clearInterval(this.refresh);
  }

  sendRota(): void {
    if (Number.isInteger(this.graForm.value.InputG)) {
      this.mesG = this.setExtendedRotaMessage();
    }
    else {
      this.mesG = this.setSimpleRotaMessage();
    }
  }

  public disableIt(id) {
    this.httpS.DisableG(id).subscribe(res => {
    },
      err => {
      })
  }

  private setSimpleRotaMessage(): Rota2 {
    return {
      data: this.graForm.value.InputDate,
      godzina: this.graForm.value.InputTime,
      idPracownika: this.graForm.value.InputW,
    }
  }

  private setExtendedRotaMessage(): Rota2 {
    return {
      data: this.graForm.value.InputDate,
      godzina: this.graForm.value.InputTime,
      idPracownika: this.graForm.value.InputW,
      idGrafiku: this.graForm.value.InputG,
    };
  }

  private getRota(): void {
    this.httpS.getRota().subscribe(rota => {
      this.rota = rota;
    },
      err => {
      })
  }


  private getWorker2() {
    this.httpS.getWorker2().subscribe(workers => {
      this.workers2 = workers;
    },
      err => {
      })

  }
}
