import { SalaryComponent } from './modules/salary/salary.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HardwareloanComponent } from './modules/hardwareloan/hardwareloan.component';
import { LeaveComponent } from './modules/leave/leave.component';
import { LoandetailsComponent } from './modules/loandetails/loandetails.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component: DashboardComponent
  },{
    path:'salary',
    component: SalaryComponent
  },
  {
    path:'hardwareloan',
    component: HardwareloanComponent
  },
  {
    path:'leave',
    component:LeaveComponent
  },
  {
    path:'loandetails',
    component:LoandetailsComponent
  },
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
