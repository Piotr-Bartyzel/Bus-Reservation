import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegComponent } from './reg.component';
import { HttpService } from 'src/app/http.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { throwError } from 'rxjs'

describe('RegComponent', () => {
  let component: RegComponent;
  let fixture: ComponentFixture<RegComponent>;
  let service: HttpService
  let resp: string ="OK";
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HttpService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add user',() => {

    spyOn(service, 'addUser').and.returnValue(of(resp));
   
    component.onSubmit();
    fixture.detectChanges();

    expect(resp).toBeTruthy();
    expect(component.response).toEqual(resp);
    expect(component.response).toBe("OK");
  });

  it('should return error',() => {

    spyOn(service, 'addUser').and.returnValue(throwError({status: 404}));
   
    component.onSubmit();
    fixture.detectChanges();

    expect(component.err).toBe('error: 404');
  });
});
