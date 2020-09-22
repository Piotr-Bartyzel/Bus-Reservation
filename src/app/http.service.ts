import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './interfaces/course';
import { MessageR, MessageL } from './sign-in/message';
import { Worker1 } from './interfaces/worker';
import { Bus } from './interfaces/bus';
import { Way } from './interfaces/way';
import { Course2 } from './interfaces/c2';
import { User, User2 } from './interfaces/user';
import { Rota } from './interfaces/rota';
import { Costs } from './interfaces/costs';
import { Stop } from './interfaces/stop';
import { Oc } from './interfaces/oc';
import { Res, Res2 } from './interfaces/res';
import { Prize, Prize2, Prize3 } from './interfaces/prize';
import { Rota2 } from './interfaces/rota2';
import { Report } from './interfaces/report';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  public getCourses(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>('http://localhost:8080/wybierzWszystkieKursy');
  }

  public getWorker(): Observable<Array<Worker1>>{
    return this.http.get<Array<Worker1>>('http://localhost:8080/listaKierowcow');
 }

 public getWorker2(): Observable<Array<Worker1>>{
  return this.http.get<Array<Worker1>>('http://localhost:8080/listaPracownikow');
}

 public getBuses(): Observable<Array<Bus>>{
    return this.http.get<Array<Bus>>('http://localhost:8080/listaPojazdow');
}

 public getWays(): Observable<Array<Way>>{
    return this.http.get<Array<Way>>('http://localhost:8080/listaTras');
 }

 public getUsers(): Observable<Array<User>>{    
  return this.http.get<Array<User>>('http://localhost:8080/wybierzWszystkichPasazerow',{ headers: this.getToken()});
}

public getRota(): Observable<Array<Rota>>{
  return this.http.get<Array<Rota>>('http://localhost:8080/wybierzGrafik',{ headers: this.getToken()});
}

public getOc(id: number): Observable<Array<Oc>>{
  return this.http.post<Array<Oc>>('http://localhost:8080/zajeteMiejsca',{id});
}

public getPrizes(): Observable<Array<Prize>>{
  return this.http.get<Array<Prize>>('http://localhost:8080/listaNagrod');
}

public getReports(): Observable<Array<Report>>{
  return this.http.get<Array<Report>>('http://localhost:8080/wybierzWszystkieRaporty',{ headers: this.getToken()});
}

public getUser(idPasazera: number): Observable<Array<User2>>{
  return this.http.post<Array<User2>>('http://localhost:8080/danePasazera',{idPasazera},{ headers: this.getToken()});
}

public getStop(id: number): Observable<Array<Stop>>{
  return this.http.post<Array<Stop>>('http://localhost:8080/danePrzystanku',{id});
}

public Res(a: Res2): Observable<string>{
  return this.http.post<string>('http://localhost:8080/anulujRezerwacje',a,{ headers: this.getToken()})
}

  public addUser(user: MessageR): Observable<string>{
    return this.http.post<string>('http://localhost:8080/dodajPasazera',user)
  }

  public authUser(user: MessageL): Observable<string>{
    return this.http.post<string>('http://localhost:8080/login',user)
  }

  public addCourse(course: Course2): Observable<string>{
    return this.http.post<string>('http://localhost:8080/dodajKurs',course,{ headers: this.getToken()})
  }

  public addStop(nazwaPrzystanku): Observable<string>{
    return this.http.post<string>('http://localhost:8080/dodajPrzystanek',nazwaPrzystanku,{ headers: this.getToken()})
  }

  public addReport(r: Costs): Observable<string>{
    return this.http.post<string>('http://localhost:8080/dodajRaport',r,{ headers: this.getToken()})
  }

  public addRes(r: Res): Observable<string>{
    return this.http.post<string>('http://localhost:8080/dokonajRezerwacji',r,{ headers: this.getToken()})
  }

  public addRota(r: Rota2): Observable<string>{
    return this.http.post<string>('http://localhost:8080/edytujGrafik',r,{ headers: this.getToken()})
  }

  public addPrize(r: Prize2): Observable<string>{
    return this.http.post<string>('http://localhost:8080/dodajNagrode',r,{ headers: this.getToken()})
  }

  public DisableG(id: number): Observable<string>{
    return this.http.post<string>('http://localhost:8080/usunGrafik',{id},{ headers: this.getToken()})
  }

  public getP(r: Prize3): Observable<string>{
    return this.http.post<string>('http://localhost:8080/przyznajNagrode',r,{ headers: this.getToken()})
  }

  getToken(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('currentUser')
    })
    return headers;
  }
}
