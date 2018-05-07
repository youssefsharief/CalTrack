import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CaloriesTrackingSubjectService {
    public updated$ = new Subject();
}
