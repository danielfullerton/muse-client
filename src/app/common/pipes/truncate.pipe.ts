import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, maxLength: number): any {
    const max = maxLength || 50;
    if (value.length > max) {
      return value.slice(0, max) + '...';
    } else {
      return value;
    }
  }

}
