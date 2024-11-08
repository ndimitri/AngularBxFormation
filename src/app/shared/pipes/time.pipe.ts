import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
  let minutes : number = Math.floor(value/60);
  let seconds : number = Math.floor(value%60);


    return `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  }
}
