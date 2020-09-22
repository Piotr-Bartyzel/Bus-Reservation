import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Prize, Prize3 } from '../interfaces/prize';
import { GlobalService } from '../global.service';
import { User2 } from '../interfaces/user';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {

  constructor(private httpS: HttpService, private global: GlobalService) { }

  prize: Prize[] = [];
  info: User2[] = [];
  response: string;
  response2: string;
  check: any;
  mes: Prize3;

  ngOnInit(): void {
    this.getPrizes();
    this.check = setInterval(() => {
      this.getUserById();
    }, 500)

  }

  ngOnDestroy() {
    clearInterval(this.check);
  }

  getPrizes(): void {
    this.httpS.getPrizes().subscribe(p => {
      console.log("Nagrody " + p.length)
      this.prize = p;
    },

      err => {
        console.log("problem " + err)
      })
  }

  getP(id): void {
    this.mes = {
      idPasazera: this.global.getUserId(),
      idNagrody: id

    }
    this.httpS.getP(this.mes).subscribe(res => {
      this.response = res;
    },
      err => {
        this.response2 = "Błąd! Skontaktuj się z administratorem!";
      })
  }

  getUserById(): void {
    this.httpS.getUser(this.global.getUserId()).subscribe(res => {
      this.info = res;
    },
      err => {
      }
    )
  }
}
