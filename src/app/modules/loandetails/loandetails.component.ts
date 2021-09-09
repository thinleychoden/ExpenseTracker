import { DeleteconfirmationComponent } from './../deleteconfirmation/deleteconfirmation.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import{Location} from '@angular/common';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.scss']
})
export class LoandetailsComponent implements OnInit {

  constructor( public dialog: MatDialog, private location: Location) { }
  backClicked(){
    this.location.back();
  }
  deleteButton(){
    this.dialog.open(DeleteconfirmationComponent);
  }

  ngOnInit(): void {
  }

}
