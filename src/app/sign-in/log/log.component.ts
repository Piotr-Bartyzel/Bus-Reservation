import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageL } from '../message';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { GlobalService } from 'src/app/global.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogComponent implements OnInit {

  message: MessageL;
  logForm: FormGroup;
  show: boolean = true;
  check: any;
  info: User[] = [];

  constructor(private httpS: HttpService, private global: GlobalService) { }

  ngOnInit(): void {
    this.logForm = new FormGroup({
      InputLogin: new FormControl(null, Validators.required),
      InputPassword: new FormControl(null, Validators.required),
    })
    this.afterLoggingIn();
  }

  ngOnDestroy() {
    clearInterval(this.check);
  }

  onSubmit(): void {
    console.log(this.logForm)
    this.message = {
      InputLogin: this.logForm.value.InputLogin,
      InputPassword: this.logForm.value.InputPassword,
    }
    console.log(this.message)

    this.httpS.authUser(this.message).subscribe(res => {
      console.log("ready!")
      console.log(res);
      localStorage.setItem('currentUser', JSON.stringify({ token: res, name: 'login' }));
      this.global.logOn = true;
      this.getUserById();

      let it = this.global.getPos();
      if (it === "Sekretariat") this.global.typMenu = 3;
      else if (it === "Admin") this.global.typMenu = 1;
      else if (it === "Kierowca") this.global.typMenu = 2;
      else this.global.typMenu = 0;
    },

      err => {
      }
    )
  }

  private afterLoggingIn(): void {
    this.check = setInterval(() => {
      if (localStorage.getItem("currentUser")) {
        this.show = false;
        this.getUserById();
      }
      else this.show = true
    }, 100)
  }

  private getUserById(): void {
    this.httpS.getUser(this.global.getUserId()).subscribe(res => {
      console.log("ready!")
      console.log(res);
      this.info = res;
    },

      err => {
        console.log("lipaaa " + err)
      }
    )
  }
}
