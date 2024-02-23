import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectToArray',
  standalone: true
})
export class ObjectToArrayPipe implements PipeTransform {
  transform(value: any): any[] {
    if (!value) {
      return [];
    }
    return Object.values(value);
  }
}
