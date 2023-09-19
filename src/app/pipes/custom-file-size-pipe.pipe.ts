import { Pipe, PipeTransform } from '@angular/core';

//used in header.component
@Pipe({
  name: 'customFileSizePipe'
})
export class CustomFileSizePipePipe implements PipeTransform {

  transform(size: number, extension: string='MB'): string {
    return (size/(1024*1024)).toFixed(2) + extension;
  }

}
