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
  tabs = ['Номер пробы 1'];
  selected = new FormControl(0);
  sample = 2;

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
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
