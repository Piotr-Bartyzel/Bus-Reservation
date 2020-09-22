import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClient, HttpParams } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { TimeTableComponent } from './time-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Course } from '../interfaces/course';
import { of } from 'rxjs';
import { HttpService } from '../http.service';

describe('TimeTableComponent', () => {

  let component: TimeTableComponent;
  let fixture: ComponentFixture<TimeTableComponent>;
  let service: HttpService

  const courses: Course []=[
    { nazwa: 'aaaa',
  wyjazd: 'aaa',
  czas: 'aaa',
  imie: 'aaa',
  nazwisko: 'aaa',
  firma: 'aaa',
  rejestracja: 'aaa'
},
{ nazwa: 'aaa',
  wyjazd: 'aaa',
  czas: 'aaa',
  imie: 'aaa',
  nazwisko: 'aaa',
  firma: 'aaa',
  rejestracja: 'aaa'
}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ TimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get It',() => {

    //spyOn(component, 'getCourses').and.returnValue(of([courses]))
    spyOn(service, 'getCourses').and.returnValue(of(courses));
   //const spyOnMethod = spyOn(component, 'getCourses').and.callThrough();
   
    component.getCourses();
    fixture.detectChanges();

   // expect(spyOnMethod).toHaveBeenCalled();
    expect(courses).toBeTruthy();
    expect(component.course).toEqual(courses);
    expect(component.course.length).toEqual(2);
  });
});
