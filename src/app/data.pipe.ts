import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DataPipe implements PipeTransform {

  transform(value: any): any {
    return new Intl.DateTimeFormat('ru', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(value).replace(/[а-я]+\./, mo => mo.slice(0, -1).toUpperCase());
  }
}
