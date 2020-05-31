import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(value: string, stringToBeReplaced: string): string {
    return value.replace(stringToBeReplaced, ' ');
  }

}
