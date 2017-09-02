import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let time = value.time != null ? value.time : value;

        let output = '';

        if (time.hour < 10) output += '0';
        output += time.hour;
        output += ':';
        if (time.minute < 10) output += '0';
        output += time.minute;
        output += 'h';

        return output;
    }

}
