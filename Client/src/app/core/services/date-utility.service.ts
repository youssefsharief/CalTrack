import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';



@Injectable()
export class DateUtilityService {

    constructor(
        private datePipe: DatePipe
    ) {  }

    combineDateAndTimeFromUIPickersToDateObject(date, time) {
        return new Date(this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + this.datePipe.transform(time, 'HH:mm'));
    }

    convertDateToMediumDate(date) {
        return this.datePipe.transform(date, 'yyyy-MM-dd')
    }

    convertDateToMediumTime(date) {
        return this.datePipe.transform(date, 'HH:mm')
    }
}
