import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNamePipe',
})
export class CustomNamePipePipe implements PipeTransform {
  transform(name: string, toUpperCase: boolean): string {
    const nameArr: string[] = name.split(' ');
    if (nameArr.length > 1) {
      const newName: string = `${nameArr[0].charAt(0)}. ${nameArr[nameArr.length - 1]}`;
      const endPoint = toUpperCase ? newName.toUpperCase() : newName;

      return endPoint;
    }
    return name;
  }
}
