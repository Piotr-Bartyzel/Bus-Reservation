import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogComponent } from './log.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from 'src/app/http.service';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;
  let service: HttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HttpService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Send Form', () => {
   
  });

  it('email field validity', () => {
    let login = component.logForm.controls['InputLogin'];
    let password = component.logForm.controls['InputPassword'];
    expect(password.valid).toBeFalsy(); 
    expect(login.valid).toBeFalsy(); 
  });
  it('email field validity2', () => {
    let login = component.logForm.controls['InputLogin'];
    let password = component.logForm.controls['InputPassword'];
    password.setValue("123");
    login.setValue("test");
    expect(login.valid).toBeTruthy; 
    expect(password.valid).toBeTruthy; 
  });

  it('onSub', () => {
    let password = component.logForm.controls['InputPassword'];
    let login = component.logForm.controls['InputLogin'];
    login.setValue("test");
    password.setValue("123");
    component.onSubmit();
    expect(component.message.InputLogin).toBe("test"); 
  });

});
