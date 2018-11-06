import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CaloriesTrackingSubjectService {
    public updated$ = new Subject();
}
