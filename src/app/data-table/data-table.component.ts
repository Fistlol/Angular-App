import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {InformationComponent} from '../information/information.component';
import {TableService} from '../services/table.service';
import {Worker} from '../worker';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Worker>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  buttons = [{btn: 'Отчет'}, {btn: 'Протокол'}, {btn: 'Исследования'}];
  displayedColumns = [
    'appNumber', 'name', 'company', 'analysis', 'registrationDate',
    'completionDate', 'laboratory', 'status', 'report'
  ];
  activeRow;

  constructor(public dialog: MatDialog,
              private tableService: TableService) {
  }

  ngOnInit(): void {
    console.log(2);
    this.tableService.get().subscribe(res => {
      console.log(res);
      this.dataSource.data = [...res];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(InformationComponent, {
      width: '1100px',
      height: '700px', });
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
        this.tableService.add(inData);
      }
    });
  }

  openUserDialog(x): any {
    this.activeRow = x;
    const dialogRef = this.dialog.open(InformationComponent,  {
      width: '1100px',
      height: '700px',
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
