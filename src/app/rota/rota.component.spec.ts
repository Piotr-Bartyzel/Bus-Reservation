import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaComponent } from './rota.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../http.service';
import { Rota } from '../interfaces/rota';
import { of } from 'rxjs';

describe('RotaComponent', () => {
  let component: RotaComponent;
  let fixture: ComponentFixture<RotaComponent>;
  let service: HttpService;
  let rota: Rota []=[];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotaComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HttpService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Route',() => {
    spyOn(service, 'getRota').and.returnValue(of(rota));

    component.getRota();
    fixture.detectChanges();

    expect(rota).toBeTruthy();
    expect(component.rota).toEqual(rota);
  });
});
