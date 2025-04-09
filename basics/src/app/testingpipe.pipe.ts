import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testingpipe'
})
export class TestingpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
