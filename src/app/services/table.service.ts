import {important, secondary} from '../mainData';
import {Worker} from '../worker';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  data = new BehaviorSubject(important);
  dataDialog = secondary;

  constructor() {
  }

  get(): Observable<Worker[]> {
    return this.data.asObservable();
  }

  add(x): void {
    const data = [...this.data.value];
    data.push(x);
    this.data.next(data);
    console.log('Data Behavior', data);
  }

  addDialog(x): void {
    this.dataDialog.push(x);
  }
}
