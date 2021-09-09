import { DeleteconfirmationComponent } from './../deleteconfirmation/deleteconfirmation.component';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  employee: string;
  empno: number;
  salary: number;
  position: string;
  increment: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {empno: 1, employee: 'Kinley Zam', increment:200, position:'Backend Developer', salary: 10079},
  {empno: 2, employee: 'Kuenzang Choden', increment:200, position:'Backend Developer', salary: 40026},
  {empno: 3, employee: 'Kinley Choki', increment:0, position:'Backend Developer', salary: 10079},
  {empno: 4, employee: 'Krishna Prasad Sharma', increment:200, position:'Backend Developer', salary: 40026},
  {empno: 5, employee: 'Eusang Lhaki Dorji', increment:200, position:'Backend Developer', salary: 10079},
  {empno: 6, employee: 'Pema Tenzin', increment:200, position:'Backend Developer', salary: 40026},
  {empno: 7, employee: 'Yeshi Wangmo', increment:100, position:'Backend Developer', salary: 10079},
  {empno: 8, employee: 'Kuenzang Chophel', increment:200, position:'Backend Developer', salary: 40026},
  {empno: 9, employee: 'Kinley Wangdi', increment:200, position:'Backend Developer', salary: 10079},
  {empno: 10, employee: 'Dechen Choden', increment:200, position:'Backend Developer', salary: 40026},
  {empno: 11, employee: 'Ugyen Choden', increment:200, position:'Backend Developer', salary: 10079},
  {empno: 12, employee: 'Karma Dorji', increment:200, position:'Backend Developer', salary: 40026},
  {empno: 13, employee: 'Tenzin Pelzang', increment:200, position:'Backend Developer', salary: 10079},
  {empno: 14, employee: 'Dechen Wangmo', increment:200, position:'Backend Developer', salary: 40026},
  
];


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements AfterViewInit {

  displayedColumns: string[] = ['empno', 'employee','position','increment', 'salary','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router, public dialog: MatDialog) {

   }
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
