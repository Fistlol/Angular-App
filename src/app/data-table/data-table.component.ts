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
      width: '1428px',
      height: '880px', });
    dialogRef.afterClosed().subscribe(result => {
      console.log('*********************S', result);
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
          status: result.controls.status.value,
          bin: result.controls.bin.value,
          field: result.get('secondForm.field').value,
          numberOfWell: result.get('secondForm.numberOfWell').value,
          numberOfSample: result.get('secondForm.numberOfSample').value,
          typeOfSampler: result.get('secondForm.typeOfSampler').value,
          interval: result.get('secondForm.interval').value,
          // firstPerforation: result.get('secondForm.interval.firstPerforation').value,
          // secondPerforation: result.get('secondForm.interval.secondPerforation').value,
          depth: result.get('secondForm.depth').value,
          temperature: result.get('secondForm.temperature').value,
          pressure: result.get('secondForm.pressure').value,
          setDate: result.get('secondForm.setDate').value,
          receiptDate: result.get('secondForm.receiptDate').value,
          IDOfSample: result.get('secondForm.IDOfSample').value
        };
        this.tableService.add(inData);
      }
    });
  }

  openUserDialog(x): any {
    console.log(x);
    this.activeRow = x;
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
        secondForm: {
          field: this.activeRow.field,
          numberOfWell: this.activeRow.numberOfWell,
          numberOfSample: this.activeRow.numberOfSample,
          typeOfSampler: this.activeRow.typeOfSampler,
          interval: this.activeRow.interval ? this.activeRow.interval : [{ firstPerforation: null, secondPerforation: null }],
          // firstPerforation: this.activeRow.firstPerforation,
          // secondPerforation: this.activeRow.secondPerforation,
          depth: this.activeRow.depth,
          temperature: this.activeRow.temperature,
          pressure: this.activeRow.pressure,
          setDate: this.activeRow.setDate,
          receiptDate: this.activeRow.receiptDate,
          IDOfSample: this.activeRow.IDOfSample
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('*****************************', result);
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
        this.activeRow.bin = result.controls.bin.value;
        this.activeRow.field = result.get('secondForm.field').value;
        this.activeRow.numberOfWell = result.get('secondForm.numberOfWell').value;
        this.activeRow.numberOfSample = result.get('secondForm.numberOfSample').value;
        this.activeRow.typeOfSampler = result.get('secondForm.typeOfSampler').value;
        this.activeRow.interval = result.get('secondForm.interval').value;
        // this.activeRow.firstPerforation = result.get('secondForm.interval.firstPerforation').value;
        // this.activeRow.secondPerforation = result.get('secondForm.interval.secondPerforation').value;
        this.activeRow.depth = result.get('secondForm.depth').value;
        this.activeRow.temperature = result.get('secondForm.temperature').value;
        this.activeRow.pressure = result.get('secondForm.pressure').value;
        this.activeRow.setDate = result.get('secondForm.setDate').value;
        this.activeRow.receiptDate = result.get('secondForm.receiptDate').value;
        this.activeRow.IDOfSample = result.get('secondForm.IDOfSample').value;
      }
    });
  }
}
