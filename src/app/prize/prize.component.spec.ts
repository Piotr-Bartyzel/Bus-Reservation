import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeComponent } from './prize.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../http.service';

describe('PrizeComponent', () => {
  let component: PrizeComponent;
  let fixture: ComponentFixture<PrizeComponent>;
  let service: HttpService; 
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
