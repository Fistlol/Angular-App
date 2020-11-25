import { TableComponent } from './../table/table.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Worker } from '../worker';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  number = 1;
  tabs = ['Номер пробы ' + this.number];
  
  selected = new FormControl(0);

  // form: FormGroup;
  testform = this.fb.group({
    dialog_name: [null],
    dialog_bin: [null],
    dialog_contract: [null],
    dialog_finalDate: [null],
    dialog_field: [null],
    dialog_well: [null],
    dialog_sampler: [null],
    dialog_firstPerforation: [null],
    dialog_secondPerforation: [null],
    dialog_depth: [null],
    dialog_temperature: [null],
    dialog_pressure: [null],
    dialog_firstDate: [null],
    dialog_secondDate: [null],
    dialog_id: [null]
  });

  secondform = this.fb.group({
    appnumber: [null],
    name: [null],
    company: [null],
    analysis: [null],
    registrationdate: [null],
    completiondate: [null],
    laboratory: [null],
    status: [null],
    report: [null]
  })



  addTab() {
    this.number++;
    this.tabs.push('Номер пробы ' + this.number);
    
    this.selected.setValue(this.tabs.length - 1);
    
  }

  removeTab(index: number) {
    if (this.number != 1) {
      this.number--;
    }
    this.tabs.splice(index, 1);
    
  }
  
  constructor(
    private fb: FormBuilder,
    private tableComponent: TableComponent,
    public dialogRef: MatDialogRef<InformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Worker) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  newClick(): void {
    this.tableComponent.rows.push(this.secondform);
  }

  ngOnInit(): void {
  }


  // submit() {
  //   const {dialog_name} = this.form.value;
  //   const {dialog_bin} = this.form.value;
  //   const {dialog_contract} = this.form.value;
  //   const {dialog_finalDate} = this.form.value;
  //   const {dialog_field} = this.form.value;
  //   const {dialog_well} = this.form.value;
  //   const {dialog_sampler} = this.form.value;
  //   const {dialog_firstPerforation} = this.form.value;
  //   const {dialog_secondPerforation} = this.form.value;
  //   const {dialog_depth} = this.form.value;
  //   const {dialog_temperature} = this.form.value;
  //   const {dialog_pressure} = this.form.value;
  //   const {dialog_firstDate} = this.form.value;
  //   const {dialog_secondDate} = this.form.value;
  //   const {dialog_id} = this.form.value;
    

  //   console.log(
  //     dialog_name, dialog_bin, dialog_contract, dialog_finalDate, dialog_field, dialog_well, dialog_sampler, dialog_firstPerforation, dialog_secondPerforation,
  //     dialog_depth, dialog_temperature, dialog_pressure, dialog_firstDate, dialog_secondDate, dialog_id
  //     )
  // }

}
