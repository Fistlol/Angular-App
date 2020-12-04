import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {InformationComponent} from '../information/information.component';
import {TableService} from '../services/table.service';
import {Worker} from '../worker';
import {secondary} from '../mainData';

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
      width: '1428px',
      height: '880px',
      data: {
        type: 'create'
      }
    });
    dialogRef.afterClosed().subscribe((result: Worker) => {
      if (result) {
        console.log('Result dialog ref afterClosed', result);
        this.tableService.add(result);
      }
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  openUserDialog(row: Worker): any {

    this.activeRow = row;
    console.log('ТИП--------------------------', row);
    console.log('------------------Active Row', this.activeRow);
    const dialogRef = this.dialog.open(InformationComponent,  {
      width: '1428px',
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
        status: this.activeRow.status,
        bin: this.activeRow.bin,
        secondForm: this.activeRow.secondForm
        // secondForm: [{
        //   field: this.activeRow.secondForm.field,
        //   numberOfWell: this.activeRow.secondForm.numberOfWell,
        //   numberOfSample: this.activeRow.secondForm.numberOfSample,
        //   typeOfSampler: this.activeRow.secondForm.typeOfSampler,
        //   interval: this.activeRow.secondForm.interval ? this.activeRow.secondForm.interval : [{
        //     firstPerforation: this.activeRow.secondForm.firstPerforation, secondPerforation: this.activeRow.secondForm.secondPerforation
        //   }],
        //   depth: this.activeRow.secondForm.depth,
        //   temperature: this.activeRow.secondForm.temperature,
        //   pressure: this.activeRow.secondForm.pressure,
        //   setDate: this.activeRow.secondForm.setDate,
        //   receiptDate: this.activeRow.secondForm.receiptDate,
        //   IDOfSample: this.activeRow.secondForm.IDOfSample
        // }]
      }
    });

    dialogRef.afterClosed().subscribe((result: Worker) => {
      console.log('RESUUUUUUUUUUUULT', result);
      if (result) {
        this.activeRow.appNumber = result.appNumber;
        this.activeRow.name = result.name;
        this.activeRow.company = result.company;
        this.activeRow.numberOfContract = result.numberOfContract;
        this.activeRow.analysis = result.analysis;
        this.activeRow.registrationDate = result.registrationDate;
        this.activeRow.completionDate = result.completionDate;
        this.activeRow.laboratory = result.laboratory;
        this.activeRow.status = result.status;
        this.activeRow.bin = result.bin;
        this.activeRow.secondForm(result.data);
      }
    });
  }
}
