  import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed, getTestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { Course } from './interfaces/course';
import { MessageR } from './sign-in/message';

const Url = 'http://localhost:8080';


const coursesMock: Array<Course> = [
  {
    id_kursu: 1,
    id_trasy: 2,    
    nazwa: 'aaaa',
    wyjazd: 'aaa',
    czas: 'aaa',
    imie: 'aaa',
    nazwisko: 'aaa',
    firma: 'aaa',
    rejestracja: 'aaa'
},
  { 
    id_kursu: 1,
    id_trasy: 3, 
    nazwa: 'aaa',
    wyjazd: 'aaa',
    czas: 'aaa',
    imie: 'aaa',
    nazwisko: 'aaa',
    firma: 'aaa',
    rejestracja: 'aaa'
}
];

const userMock: MessageR = {
    InputName: 'aaa',
    InputSurname: 'aaa',
    InputLogin: 'aa',
    InputPassword: 'sasas',
    InputDate: new Date(),
    InputEmail: 'aaa@aa.pl',
    InputPhone: 122323,
    Check: true

}
describe('HttpService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpService
      ]
    });
  });

  beforeEach(() => {
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
    service = injector.inject(HttpService);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Service should delivere courses', () => {
    let courses: Array<Course> = [];
    const getCoursesSpy = spyOn(service, 'getCourses').and.callThrough();

    service.getCourses().subscribe((c: Array<Course>) => courses = c);

    const req = httpMock.expectOne(Url+'/wybierzWszystkieKursy');
    expect(req.request.method).toEqual('GET');
    req.flush(coursesMock);

    expect(getCoursesSpy).toHaveBeenCalled();
    expect(courses).toBeTruthy();
    expect(courses.length).toEqual(2);
  });

  it('Service should send user', () => {
    let resp: string="";
    const addUserSpy = spyOn(service, 'addUser').and.callThrough();

    service.addUser(userMock).subscribe((c: string) => resp = c);

    const req = httpMock.expectOne(Url+'/dodajPasazera');
    expect(req.request.method).toEqual('POST');
    req.flush("OK");

    expect(addUserSpy).toHaveBeenCalled();
    expect(resp).toBeTruthy();
    expect(resp).toBe('OK');
  });
});
