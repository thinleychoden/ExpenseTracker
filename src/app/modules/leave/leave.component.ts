import { Component, OnInit,ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  employee: string;
  empno: number;
  position: string;
  leavetype: string;
  from: string;
  to: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {empno: 1, employee: 'Kinley Zam', position:'Backend Developer', leavetype: 'official', from: '10/3/2021', to:'11/3/2021'},
  {empno: 2, employee: 'Kuenzang Choden', position:'Backend Developer',leavetype: 'trip', from: '10/3/2021', to:'11/3/2021'},
  {empno: 3, employee: 'Eusang Lhaki Dorji', position:'UI Developer', leavetype: 'personal', from: '10/3/2021', to:'11/3/2021'},
  {empno: 4, employee: 'Dechen Wangmo', position:'UI Developer', leavetype: 'trip', from: '10/3/2021', to:'11/3/2021'},
  {empno: 5, employee: 'Dechen Choden',position:'Frontend Developer', leavetype: 'trip', from: '10/3/2021', to:'11/3/2021'},
  {empno: 6, employee: 'Krisha Sharma',position:'Backend Developer', leavetype: 'official', from: '10/3/2021', to:'11/3/2021'},
  {empno: 7, employee: 'Khusant', position:'Backend Developer', leavetype: 'personal', from: '10/3/2021', to:'11/3/2021'},
  {empno: 8, employee: 'Pema Gaylay', position:'System Adminitrator', leavetype: 'personal', from: '10/3/2021', to:'11/3/2021'},
];

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements AfterViewInit {

  displayedColumns: string[] = ['empno', 'employee','position', 'leavetype','from','to','remarks'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

}
