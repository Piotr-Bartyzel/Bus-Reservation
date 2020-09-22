import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GlobalService } from './global.service';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let global: GlobalService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
     global = TestBed.inject(GlobalService)
  }));

 /* it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });*/

  it(`should have as title 'Projekt'`, () => {
    
    expect(app.kontoWlasciciela).toEqual('main');
  });

  it(`should find height!`, () => {
    fixture.detectChanges()
    app.ngAfterViewInit();
    expect(global.fullHeight).toBeLessThan(300);
  });

});
