import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNameArrArgsPipe',
})
export class CustomNameArrArgsPipePipe implements PipeTransform {
  transform(name: string, ...args: unknown[]): string {
    // ARGS0 = toUpperCase
    // ARGS0 = toLowerCase
    // ARGS0 = to cammel case

    if (args[0]) {
      return name.toUpperCase();
    } else if (args[1]) {
      return name.toLowerCase();
    } else if (args[2]) {
      const nameArr = name.split(' ');
      let newName = nameArr[0].toLowerCase();
      for (let i = 1; i < nameArr.length; i++) {
        newName += nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1).toLowerCase();
        return newName;
      }
    }
    return name;
  }
}
