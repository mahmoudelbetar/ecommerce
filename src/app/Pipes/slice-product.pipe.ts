import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceProduct'
})
export class SliceProductPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0, 29);
  }

}
