import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
import { ContactComponent } from './contact/contact.component';
import { InformationComponent } from './information/information.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegComponent } from './sign-in/reg/reg.component';
import { LogComponent } from './sign-in/log/log.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { UsersComponent } from './users/users.component';
import { FuelComponent } from './fuel/fuel.component';
import { ResComponent } from './res/res.component';
import { PrizeComponent } from './prize/prize.component';
import { ReportsComponent } from './reports/reports.component';
import { RotaComponent } from './rota/rota.component';


const appRoutes: Routes = [

    {
        path:'',
        redirectTo: '/informacje',
        pathMatch: 'full'
    },
    {
        path:'informacje',
        component: InformationComponent
    },
    {
        path:'rozklad_jazdy',
        component: TimeTableComponent
    },
    {
        path:'zaloguj',
        component: SignInComponent,
        children:[
            {
                path: '',
                component: LogComponent
            },
            {
                path: 'reg',
                component: RegComponent
            }   
        ]
    },
    {
        path:'kontakt',
        component: ContactComponent
    },
    {
        path:'edycja',
        component: EditPanelComponent
    },
    {
        path:'users',
        component: UsersComponent
    },
    {
        path:'kosztaPaliwa',
        component: FuelComponent
    },
    {
        path:'rezerwacja',
        component: ResComponent
    },
    {
        path:'nagrody',
        component: PrizeComponent
    },
    {
        path:'raporty',
        component: ReportsComponent
    },
    {
        path:'grafik',
        component: RotaComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }
    
    
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}