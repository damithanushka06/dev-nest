import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'pureExample',
  pure:true
})
export class PureExamplePipe implements PipeTransform {

  transform(value: number[]): number {
    console.log('Pure pipe executed');
    return value.reduce((a, b) => a + b, 0);
  }

}
