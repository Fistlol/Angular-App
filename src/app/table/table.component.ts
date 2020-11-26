import { Tester } from './../tester';
import { Worker } from './../worker';
import { Data } from '../data';
import { important, secondary } from '../mainData';
import { InformationComponent } from './../information/information.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  buttons = [{button: 'Отчет'}, {button: 'Протокол'}, {button: 'Исследования'}];
  displayedColumns = ['appNumber', 'name', 'company', 'analysis', 'registrationDate', 'completionDate', 'laboratory', 'status', 'report'];
  dataSource = important;
  

  constructor(public dialog: MatDialog, private tester: Tester) { }

  ngOnInit() {
  }

  

  openDialog(): any {
    const dialogRef = this.dialog.open(InformationComponent, {
      width: '1328px',
      height: '880px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const inData = {
          appNumber: result.controls.appNumber.value,
          name: result.controls.name.value,
          company: result.controls.company.value,
          numberOfContract: result.controls.numberOfContract.value,
          analysis: result.controls.analysis.value,
          registrationDate: result.controls.registrationDate.value,
          completionDate: result.controls.completionDate.value,
          laboratory: result.controls.laboratory.value,
          status: result.controls.status.value
        };
        this.tester.addTable(inData);
      }
    });
  }

  activeRow;

  openRowDialog(x): any {
    this.activeRow = x;
    const dialogRef = this.dialog.open(InformationComponent, {
      width: '1328px',
      height: '880px',
      data: {
        appNumber: this.activeRow.appNumber,
        name: this.activeRow.name,
        company: this.activeRow.company,
        numberOfContract: this.activeRow.numberOfContract,
        analysis: this.activeRow.analysis,
        registrationDate: this.activeRow.registrationDate,
        completionDate: this.activeRow.completionDate,
        laboratory: this.activeRow.laboratory,
        status: this.activeRow.status
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.activeRow.appNumber = result.controls.appNumber.value;
        this.activeRow.name = result.controls.name.value;
        this.activeRow.company = result.controls.company.value;
        this.activeRow.numberOfContract = result.controls.numberOfContract.value;
        this.activeRow.analysis = result.controls.analysis.value;
        this.activeRow.registrationDate = result.controls.registrationDate.value;
        this.activeRow.completionDate = result.controls.completionDate.value;
        this.activeRow.laboratory = result.controls.laboratory.value;
        this.activeRow.status = result.controls.status.value;
      }
    });
  }

}