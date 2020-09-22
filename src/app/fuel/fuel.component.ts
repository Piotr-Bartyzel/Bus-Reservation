import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Worker1 } from '../interfaces/worker';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Costs } from '../interfaces/costs';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  constructor(private httpS: HttpService) { }

  workers: Worker1[] = [];
  fuelForm: FormGroup;
  report: Costs;
  red: Boolean = false;
  response: string;

  ngOnInit(): void {
    this.getWorker();
    this.fuelForm = new FormGroup({
      InputAmount: new FormControl(null, Validators.required),
      InputCost: new FormControl(null, Validators.required),
      InputWorker: new FormControl(null, Validators.required),
    })
  }

  onSubmit(): void {
    this.report = {
      amount: this.fuelForm.value.InputAmount,
      cost: this.fuelForm.value.InputCost,
      id_pracownika: this.fuelForm.value.InputWorker,
    }
    this.setReport();
  }

  private setReport(): void {
    this.httpS.addReport(this.report).subscribe(resp => {
      this.red = false;
      this.response = resp;
    },
      err => {
        this.red = true;
        this.response = "Wprowadź poprawne dane!"
      })
  }

  private getWorker() {
    this.httpS.getWorker().subscribe(workers => {
      this.workers = workers;
    },
      err => {
      })
  }

}
