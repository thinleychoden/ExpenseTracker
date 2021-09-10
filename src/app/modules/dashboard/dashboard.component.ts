import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router';


export interface PeriodicElement {
  employee: string;
  empno: number;
  salary: number;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {empno: 1, employee: 'Kinley Zam', position:'Backend', salary: 10079},
  {empno: 2, employee: 'Kuenzang Choden', position:'Backend', salary: 40026},
  {empno: 3, employee: 'Kinley Choki',  position:'Backend', salary: 10079},
  {empno: 4, employee: 'Krishna Prasad Sharma', position:'Backend', salary: 40026},
  {empno: 5, employee: 'Eusang Lhaki Dorji', position:'Backend', salary: 10079},
  
  
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['empno', 'employee','position', 'salary','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  
  constructor(private router: Router) {}
  onViewDetails(){
    this.router.navigate(['/loandetails'])
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    
  }


}
