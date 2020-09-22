import { Component, OnInit, RendererStyleFlags2 } from '@angular/core';
import { HttpService } from '../http.service';
import { Course } from '../interfaces/course';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Stop } from '../interfaces/stop';
import { Oc } from '../interfaces/oc';
import { GlobalService } from '../global.service';
import { Res, Res2 } from '../interfaces/res';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit {

  course: Course[] = [];
  stop: Stop[] = [];
  oc: Oc[] = [];
  resForm: FormGroup;
  res1Form: FormGroup;
  id_trasy: number;
  id_kursu: number;
  show: number = 0;
  res: Res;
  res2: Res2;
  dis_places: number[] = [];
  places: number[] = [];
  response: string;

  vis: number = 1;
  constructor(private httpS: HttpService, private global: GlobalService) { }

  ngOnInit(): void {

    this.getCourses();
    this.resForm = new FormGroup({
      InputCourse: new FormControl(null, Validators.required),
      InputStop: new FormControl(null, Validators.required),
      InputPlace: new FormControl(null, Validators.required),
      InputDate: new FormControl(null, Validators.required),
    })

    this.res1Form = new FormGroup({
      InputCourse: new FormControl(null, Validators.required),
      InputPlace: new FormControl(null, Validators.required),
    })

    for (let i = 0; i < 30; i++) {
      this.places[i] = i;
    }
  }

  getCourses() {
    this.httpS.getCourses().subscribe(course => {
      this.course = course;
    },

      err => {
      })
  }

  getStop() {
    this.id_trasy = this.resForm.value.InputCourse[0];
    this.id_kursu = this.resForm.value.InputCourse[1];

    this.httpS.getStop(this.id_trasy).subscribe(stop => {
      this.stop = stop;
    },
      err => {
      })

    this.httpS.getOc(this.id_kursu).subscribe(oc => {
      this.oc = oc;

      let nr = 0;
      for (let o = 0; o < oc.length; o++) {
        this.dis_places[o] = oc[o]['miejsce']
      }

      for (let i = 0; i < this.dis_places.length; i++) {
        this.places = this.places.filter(p => p !== this.dis_places[i]);
      }
      this.show = 1;
    },
      err => {
      })

  }

  getStop2() {
    this.id_trasy = this.res1Form.value.InputCourse[0];
    this.id_kursu = this.res1Form.value.InputCourse[1];

    this.httpS.getStop(this.id_trasy).subscribe(stop => {
      this.stop = stop;
    },
      err => {
      })

    this.httpS.getOc(this.id_kursu).subscribe(oc => {
      this.oc = oc;

      let nr = 0;
      for (let o = 0; o < oc.length; o++) {
        this.dis_places[o] = oc[o]['miejsce']
      }

      for (let i = 0; i < this.dis_places.length; i++) {
        this.places = this.places.filter(p => p !== this.dis_places[i]);
      }
      this.show = 1;

    },
      err => {
      })

  }

  onSubmit() {
    this.res = {
      idPasazera: this.global.getUserId(),
      idKursu: this.resForm.value.InputCourse[1],
      miejsce: this.resForm.value.InputPlace,
      przystanek: this.resForm.value.InputStop,
      data: this.resForm.value.InputDate
    }
    this.httpS.addRes(this.res).subscribe(resp => {
      this.response = resp;
    },

      err => {
      })
  }

  onSubmit1() {
    this.res2 = {
      idPasazera: this.global.getUserId(),
      idKursu: this.res1Form.value.InputCourse[1],
      miejsce: this.res1Form.value.InputPlace,
    }
    console.log(this.res2)

    this.httpS.Res(this.res2).subscribe(resp => {
      this.response = resp;
    },

      err => {
      })
  }

  setVisible(x) {
    this.vis = x;
  }
}
