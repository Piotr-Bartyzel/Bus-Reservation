import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPanelComponent } from './edit-panel.component';
import { HttpService } from '../http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Worker1 } from '../interfaces/worker';
import { of } from 'rxjs';


describe('EditPanelComponent', () => {
  let component: EditPanelComponent;
  let fixture: ComponentFixture<EditPanelComponent>;
  let service: HttpService;
  let workers: Worker1 []=[];

  let resp: string ="OK";
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPanelComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPanelComponent);
    component = fixture.componentInstance;
     .detectChanges();
    service = TestBed.inject(HttpService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Workers',() => {
    spyOn(service, 'getWorker').and.returnValue(of(workers));

    component.getWorker();
    fixture.detectChanges();

    expect(workers).toBeTruthy();
    expect(component.workers).toEqual(workers);
  });



  it('onSub1', () => {
    let date = component.set1Form.controls['InputDate'];
    let time = component.set1Form.controls['InputTime'];
    let worker = component.set1Form.controls['InputWorker'];
    let bus = component.set1Form.controls['InputBus'];
    let way = component.set1Form.controls['InputWay'];
    

    date.setValue(new Date("2020-04-03"));
    time.setValue('12:12');
    worker.setValue(1);
    bus.setValue(1);
    way.setValue(1);

    spyOn(service, 'addCourse').and.returnValue(of(resp));

    component.onSubmit1();
    expect(component.message.data).toEqual(new Date("2020-04-03")); 
    expect(component.message.id_pracownika).toBe(1); 

    fixture.detectChanges();

    expect(resp).toBeTruthy();
    expect(component.response).toEqual(resp);
    expect(component.response).toBe("OK");
  });

 
  it('onSub2', () => {

    spyOn(service, 'addStop').and.returnValue(of(resp));
   
    component.onSubmit2();
    fixture.detectChanges();

    expect(resp).toBeTruthy();
    expect(component.response).toEqual(resp);
    expect(component.response).toBe("OK");
  });
});
