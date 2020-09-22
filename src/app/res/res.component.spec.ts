import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResComponent } from './res.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../http.service';

describe('ResComponent', () => {
  let component: ResComponent;
  let fixture: ComponentFixture<ResComponent>;
  let service: HttpService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
