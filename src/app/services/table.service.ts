import {important, secondary} from '../mainData';
import {Worker} from '../worker';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  data = important;
  dataDialog = secondary;

  constructor() {
  }

  get(): Observable<Worker[]> {
    return of(this.data);
  }

  add(x): void {
    this.data.push(x);
  }

  addDialog(x): void {
    this.dataDialog.push(x);
  }
}
