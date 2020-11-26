import { important, secondary } from './mainData';
import { Worker } from './worker';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
      providedIn: 'root'
})
export class Tester {
      dataTable = important;
      dataDialog = secondary;

      constructor() {
      }

      get(): Observable<Worker[]> {
            return of(this.dataTable);
      }

      addTable(x): void {
            this.dataTable.push(x);
      }

      addDialog(x): void {
            this.dataDialog.push(x);
      }
}