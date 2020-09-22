import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { MessageR } from '../message';
import { GlobalService } from 'src/app/global.service';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css',
    '../log/log.component.css'
  ]

})
export class RegComponent implements OnInit {
  regForm: FormGroup;
  response: string;
  err: string;
  messageR: MessageR;

  constructor(private global: GlobalService, private httpS: HttpService) { }

  ngOnInit(): void {
    let x = 0;
    let move = setInterval(() => {
      console.log(x)
      window.scrollTo({
        top: x += 3
      });
      if (x > this.global.fullHeight) clearInterval(move)
    }, 5)

    this.regForm = new FormGroup({
      InputName: new FormControl(null, Validators.required),
      InputSurname: new FormControl(null, Validators.required),
      InputLogin: new FormControl(null, Validators.required),
      InputEmail: new FormControl(null, [Validators.required, Validators.email]),
      InputPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      InputPhone: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]*')]),
      InputDate: new FormControl(null, [Validators.required]),
      Check: new FormControl(null, [Validators.required]),

    })
  }

  onSubmit(): void {
    this.messageR = this.buildMessage();
    this.httpS.addUser(this.messageR).subscribe(res => {
      console.log("Response user: " + res);
      this.response = res;

    },

      err => {
        this.err = "error: " + err.status;
      }
    )
  }

  private buildMessage(): MessageR {
    return {
      InputName: this.regForm.value.InputName,
      InputSurname: this.regForm.value.InputSurname,
      InputLogin: this.regForm.value.InputLogin,
      InputEmail: this.regForm.value.InputEmail,
      InputPassword: this.regForm.value.InputPassword,
      InputPhone: this.regForm.value.InputPhone,
      InputDate: this.regForm.value.InputDate,
      Check: this.regForm.value.Check,
    }
  }
}
