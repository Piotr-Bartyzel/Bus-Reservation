import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app.routing.module';
import { InformationComponent } from './information/information.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegComponent } from './sign-in/reg/reg.component';
import { LogComponent } from './sign-in/log/log.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { UsersComponent } from './users/users.component';
import { FuelComponent } from './fuel/fuel.component';
import { ResComponent } from './res/res.component';
import { PrizeComponent } from './prize/prize.component';
import { ReportsComponent } from './reports/reports.component';
import { RotaComponent } from './rota/rota.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    InformationComponent,
    TimeTableComponent,
    PageNotFoundComponent,
    SignInComponent,
    LogComponent,
    RegComponent,
    EditPanelComponent,
    UsersComponent,
    FuelComponent,
    ResComponent,
    PrizeComponent,
    ReportsComponent,
    RotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
  AppComponent
  ]
})
export class AppModule { }
