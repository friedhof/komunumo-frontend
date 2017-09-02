import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'date'
})
export class DatePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let date = value.date != null ? value.date : value;

        let output = '';

        if (date.day < 10) output += '0';
        output += date.day;
        output += '.';
        if (date.month < 10) output += '0';
        output += date.month;
        output += '.';
        output += date.year;

        return output;
    }

}
