import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, emptyText: string): unknown {
    debugger;
    if(value== null || value == undefined || value == '') {
      return emptyText;
    } else {
      return value;
    }
  }

}
