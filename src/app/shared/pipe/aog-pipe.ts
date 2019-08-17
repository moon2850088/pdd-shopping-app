import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'appAgo'})
export class AgoPipe implements PipeTransform {
    transform(value: any): any {
        if(value){
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if(seconds < 30){
                return '刚刚';
            }

            const intervals = {
                year: 3600 * 24 * 360,
                month: 3600 * 24 * 30,
                week: 3600 * 24 * 7,
                day: 3600 * 24,
                hours: 3600,
                mins: 60,
                sec: 1
            };

            let counter = 0;
            for (const unitName in intervals) {
                if (intervals.hasOwnProperty(unitName)) {
                    const unitValue = intervals[unitName];
                    counter =Math.floor(seconds / unitValue);
                    if(counter > 0) {
                        return `${counter} ${unitName} 前`;
                    }
                }
            }
        }
        return value;
    }
}