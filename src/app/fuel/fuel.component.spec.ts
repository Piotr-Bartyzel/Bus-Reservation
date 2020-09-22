import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelComponent } from './fuel.component';
import { HttpService } from '../http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FuelComponent', () => {
  let component: FuelComponent;
  let fixture: ComponentFixture<FuelComponent>;
  let service: HttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
