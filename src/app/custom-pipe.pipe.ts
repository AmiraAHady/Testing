import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(null!==value && !isNaN(value)){
      return value*value;
    }
    else{
      return 'Not a number';
    }
  }
      

}
