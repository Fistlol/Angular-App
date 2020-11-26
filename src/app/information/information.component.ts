import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TableComponent } from './../table/table.component';
import { Tester } from './../tester';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  providers: []
})
export class InformationComponent implements OnInit {
  sample = 2;
  number = 1;
  
  selected = new FormControl(0);

  form = this.fb.group({
    appNumber: [null],
    name: [null, Validators.required],
    company: [null],
    analysis: [null],
    registrationDate: [null],
    completionDate: [null, Validators.required],
    laboratory: [null],
    status: [null],
    bin: [null, Validators.required],
    numberOfContract: [null, Validators.required],
    secondForm: this.fb.group({
      field: [null],
      numberOfWell: [null],
      typeOfSampler: [null],
      firstPerforation: [null],
      secondPerforation: [null],
      depth: [null],
      temperature: [null],
      pressure: [null],
      setDate: [null],
      receiptDate: [null],
      IDOfSample: [null]
    })
  });

  tabs = [{form: this.form}];
  selectAfterAdding = true;
  menus = [{item: 'item 1'}, {item: 'item 2'}, {item: 'item 3'}];
  secondMenu = [{item: 'item 1'}, {item: 'item 2'}, {item: 'item 3'}];

  tabsPerforationInterval = [
    {interval: this.form.get('secondForm').get('firstPerforation').get('secondPerforation')}
  ];


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tester: Tester) {
    if (data) {
      for (const key in data) {
        this.form.get(key).patchValue(data[key]);
      }
    }
  }

  ngOnInit(): void {
  }

  addTab(): void {
    this.tabs.push({form: this.form});
    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number): void {
    this.tabs.splice(index, 1);
    this.selected.setValue(this.tabs.length - 1);
  }

  onSubmit(): void {
    this.dialogRef.close(this.form);
    this.tester.addDialog(this.form.get('secondForm'));
  }

  addInterval(): void {
    this.tabsPerforationInterval.push(
          {interval: this.form.get('secondForm').get('firstPerforation').get('secondPerforation')}
    );
  }
  
  removeInterval(index: number): void {
    this.tabsPerforationInterval.splice(index, 1);
  }
    
  onNoClick(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.number++;
  }

  remove(): void {
    this.number--;
    if (this.number <= 1) {
      this.number = 1;
    }
  }
  
  plusPositionAfter(): object {
    const styles = {
          'right.px': -30
    };
    return styles;
  }

  plusPositionBefore(): object {
    let styles = {};
    if (this.tabs.length > 3) {
          styles = {
                'right.px': -30
          };
    } else {
          styles = {
                'left.px': 270 * this.tabs.length
          };
    }
    return styles;
  }

  nameError(): string {
    if (this.form.get('name').hasError('required')) {
      return 'Введите наименование заказчика';
    }
    return '';
  }

  binError(): string {
    if (this.form.get('bin').hasError('required')) {
      return 'Заполните поле БИН';
    }
    return '';
  }

  contractNumberError(): string {
    if (this.form.get('contractNumber').hasError('required')) {
      return 'Введите номер договора';
    }
    return '';
  }

  dateFinishError(): string {
    if (this.form.get('dateFinish').hasError('required')) {
      return 'Выберите дату завершения';
    }
    return '';
  }
}
