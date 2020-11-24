import { MatTabsModule } from '@angular/material/tabs';
import { FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  addTab(selectAfterAdding: boolean) {
    this.number++;
    this.tabs.push('Номер пробы ' + this.number);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.number--;
  }
  
  constructor(
    public dialogRef: MatDialogRef<InformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Worker) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
