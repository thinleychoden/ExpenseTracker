import { MatButtonModule } from '@angular/material/button';
import { LoandetailsComponent } from './../../modules/loandetails/loandetails.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../../shared/shared.module';
import { LeaveComponent } from './../../modules/leave/leave.component';
import { HardwareloanComponent } from './../../modules/hardwareloan/hardwareloan.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SalaryComponent } from './../../modules/salary/salary.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { DeleteconfirmationComponent } from './../../modules/deleteconfirmation/deleteconfirmation.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    SalaryComponent,
    HardwareloanComponent,
    LeaveComponent,
    LoandetailsComponent,
    DeleteconfirmationComponent,
  ],
  entryComponents: [DeleteconfirmationComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    SharedModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class DefaultModule { }
