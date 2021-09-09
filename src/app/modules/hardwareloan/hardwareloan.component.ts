import { DeleteconfirmationComponent } from './../deleteconfirmation/deleteconfirmation.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  employee: string;
  empno: number;
  loan: number;
 deduction: number;
  balance: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {empno: 1, employee: 'Kinley Zam',deduction:5000, loan: 10079, balance:40000},
  {empno: 2, employee: 'Kuenzang Choden',deduction:5000, loan: 40026, balance:40000},
  {empno: 3, employee: 'Eusang Lhaki Dorji',deduction:2500, loan: 6941, balance:40000},
  {empno: 4, employee: 'Dechen Wangmo',deduction:2500, loan: 90122, balance:40000},
  {empno: 5, employee: 'Dechen Choden',deduction:3500,  loan: 10811, balance:40000},
  {empno: 6, employee: 'Krisha Sharma',deduction:5000,  loan: 120107, balance:40000},
  {empno: 7, employee: 'Khusant',deduction:5000, loan: 140067, balance:40000},
  {empno: 8, employee: 'Pema Gaylay',deduction:6000,  loan: 159994, balance:40000},
  {empno: 9, employee: 'Tshering Dorji',deduction:5000,  loan: 189984, balance:50000},
  {empno: 10, employee: 'Ugyen Choden',deduction:5000,  loan: 201797, balance:40000},
  {empno: 11, employee: 'Pema Dorji',deduction:3500, loan: 229897, balance:40000},
  {empno: 12, employee: 'Karma Tensel',deduction:5000,  loan: 24305, balance:40000},
  {empno: 13, employee: 'Yeshi Jigyel Dorji',deduction:5000, loan: 269815, balance:40000},
  {empno: 14, employee: 'Jamyang Lodey',deduction:3500, loan: 280855, balance:40000},
  {empno: 15, employee: 'Kinley Penjor',deduction:2500, loan: 309738, balance:-1000},
  {empno: 16, employee: 'Sonam Pelden',deduction:7000, loan: 32065, balance:40000},
  {empno: 17, employee: 'Kinley Choki',deduction:3500, loan: 35453, balance:40000},
  {empno: 18, employee: 'Tshering Wangchuk',deduction:5000, loan: 39948, balance:40000},
  {empno: 19, employee: 'Passang Dorji',deduction:5000, loan: 390983, balance:40000},
  {empno: 20, employee: 'Karma Dorji',deduction:5000, loan: 40078, balance:40000},
];

@Component({
  selector: 'app-hardwareloan',
  templateUrl: './hardwareloan.component.html',
  styleUrls: ['./hardwareloan.component.scss']
})
export class HardwareloanComponent implements AfterViewInit {

  displayedColumns: string[] = ['empno', 'employee', 'deduction', 'loan','balance','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private router: Router, public dialog: MatDialog) { }

  onLoanDetails(){
    this.router.navigate(['/loandetails'])
  }
  deleteButton(){
    this.dialog.open(DeleteconfirmationComponent);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }


}
