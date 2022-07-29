import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(noteFilterData: any, searchString?: string): any {
    if (!searchString) {
      return noteFilterData;
    }
    console.log(noteFilterData)
    return noteFilterData.filter((x: any) => x.Title.toLocaleLowerCase().includes(searchString)
      || x.Descreption.toLocaleLowerCase().includes(searchString)
    );
  }

}
