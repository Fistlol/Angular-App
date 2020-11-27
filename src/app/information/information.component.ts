import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DataTableComponent} from '../data-table/data-table.component';
import {TableService} from '../services/table.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  sample = 2;
  number = 2;
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
  selected = new FormControl(0);
  selectAfterAdding = true;
  tabs = [{form: this.form}];
  menus = [{item: 'test 1'}, {item: 'test 2'}, {item: 'test 3'}];
  secondMenu = [{item: 'test 1'}, {item: 'test 2'}, {item: 'test 3'}];

  tabsPerforationInterval = [
    {interval: this.form.get('secondForm').get('firstPerforation').get('secondPerforation')}
  ];


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DataTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tableService: TableService) {
    if (data) {
      // tslint:disable-next-line:forin
      for (const key in data) {
        this.form.get(key).patchValue(data[key]);
      }
    }
  }

  ngOnInit(): void {
  }

  addTab(selectAfterAdding): void {
    this.tabs.push({form: this.form});
    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number): void {
    this.tabs.splice(index, 1);
    this.selected.setValue(this.tabs.length - 1);
  }

  onSubmit(): void {
    // this.tableService.addTable(this.form.value);
    this.dialogRef.close(this.form);
    this.tableService.addDialog(this.form.get('secondForm'));
  }

  addInterval(): void {
    this.tabsPerforationInterval.push(
      {interval: this.form.get('secondForm').get('firstPerforation').get('secondPerforation')}
    );
  }

  removeInterval(index: number): void {
    this.tabsPerforationInterval.splice(index, 1);
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
    if (this.form.get('numberOfContract').hasError('required')) {
      return 'Введите номер договора';
    }
    return '';
  }

  dateFinishError(): string {
    if (this.form.get('completionDate').hasError('required')) {
      return 'Выберите дату завершения';
    }
    return '';
  }
}
