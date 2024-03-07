import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, searchfilter: any, fields: string[] = []): any {
    if (!value || !searchfilter || !fields.length) {
      return value;
    }

    return value.filter((e: any) => {
      for (const field of fields) {
        if (e[field] && e[field].toString().toLowerCase().includes(searchfilter.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

}
