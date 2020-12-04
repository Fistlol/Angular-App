import {Component, Inject, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DataTableComponent} from '../data-table/data-table.component';
import {TableService} from '../services/table.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  loading = true;
  count = 2;
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
    secondForm: this.fb.array([])
  });
  selected = new FormControl(0);
  selectAfterAdding = true;
  tabs: any[] = [{form: this.form.controls.secondForm}];
  menus = [{item: 'test 1'}, {item: 'test 2'}, {item: 'test 3'}];
  secondMenu = [{item: 'test 1'}, {item: 'test 2'}, {item: 'test 3'}];
  thirdMenu = [{item: 'test 1'}, {item: 'test 2'}, {item: 'test 3'}];

  // tabsPerforationInterval = [
  //   {interval: this.form.get('secondForm').get('firstPerforation').get('secondPerforation')}
  // ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DataTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tableService: TableService) {
    console.log('Data ===============================================', data);

    if (data.type === 'create') {
      return;
    }
    if (data) {
      // tslint:disable-next-line:forin
      for (const key in data) {
        if (data[key]) {
          this.form.get(key).patchValue(data[key]);
          if (key === 'secondForm' && data[key] && data[key].numberOfSample) {
            this.count = data[key].numberOfSample;
          }
          // if (key === 'secondForm' && data[key].interval) {
          //   this.form.value.secondForm.interval = [];
          //   const value = this.form.get('secondForm.interval') as FormArray;
          //   data[key].interval.forEach((r, i) => {
          //     if (i !== 0) {
          //       value.push(
          //         this.fb.group(r)
          //       );
          //     }
          //   });
          // }
          if (key === 'secondForm') {
            this.form.value.secondForm = [];
            const test = this.form.get('secondForm') as FormArray;
            data[key].forEach((d, i) => {
              test.push(
                this.fb.group(d)
              );
            });
          }
        }
      }
    }
  }

  selectTab(id: number): void {
  }

  ngOnInit(): void {
    this.addTab(this.selectAfterAdding);

  }

  addTab(selectAfterAdding): void {
    const secondForm = this.fb.group({
      field: [null],
      numberOfWell: [null],
      numberOfSample: this.count,
      typeOfSampler: [null],
      interval: this.fb.array([this.fb.group({
        firstPerforation: [],
        secondPerforation: []
      })]),
      depth: [null],
      temperature: [null],
      pressure: [null],
      setDate: [null],
      receiptDate: [null],
      IDOfSample: [null]
    });
    const formArray = this.form.get('secondForm') as FormArray;
    formArray.push(secondForm);
    if (selectAfterAdding) {
      this.selected.setValue(formArray.length - 1);
    }
  }

  // addTab(selectAfterAdding): void {
  //   this.tabs[this.selected.value] = {
  //     form: this.form.value
  //   };
  //   this.form.patchValue({
  //     secondForm: {
  //       field: [null],
  //         numberOfWell: null,
  //         numberOfSample: this.count = 2,
  //         typeOfSampler: null,
  //         interval: [{
  //           firstPerforation: null,
  //           secondPerforation: null
  //         }],
  //         depth: null,
  //         temperature: null,
  //         pressure: null,
  //         setDate: null,
  //         receiptDate: null,
  //         IDOfSample: null
  //     }
  //   });
  //   this.form.get('secondForm.interval').reset();
  //   this.tabs.push({form: this.form});
  //   if (selectAfterAdding) {
  //     this.selected.setValue(this.tabs.length - 1);
  //   }
  //   this.tabs.forEach(r => {
  //     console.log('Rrrr===', r.form.value);
  //   });
  // }

  removeTab(index: number): void {
    const secondForm = this.form.get('secondForm') as FormArray;
    secondForm.removeAt(index);
  }

  onSubmit(): void {
    // this.tableService.addTable(this.form.value);
    this.dialogRef.close(this.form.value);
    this.tableService.addDialog(this.form.get('secondForm'));
  }

  addInterval(): void {
    // this.tabsPerforationInterval.push(
    //   {interval: this.form.get('secondForm').get('firstPerforation').get('secondPerforation')}
    // );
    const value = this.form.get('secondForm.interval') as FormArray;
    value.push(this.fb.group({
      firstPerforation: [],
      secondPerforation: []
    }));
    console.log('AddInterval', this.form.value);
    console.log(this.form);
  }

  removeInterval(index: number): void {
    // this.tabsPerforationInterval.splice(index, 1);
    const value = this.form.get('secondForm.interval') as FormArray;
    value.removeAt(index);
  }

  add(): void {
    this.count++;
  }

  remove(): void {
    this.count--;
    if (this.count <= 1) {
      this.count = 1;
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
    if (this.form.get('secondForm').value.length > 3) {
      styles = {
        'right.px': -30
      };
    } else {
      styles = {
        'left.px': 270 * this.form.get('secondForm').value.length
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

  // tslint:disable-next-line:typedef
  get formArr() {
    const contr = this.form.get('secondForm.interval') as FormArray;
    return contr.controls;
  }
}
