import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MealChangesService {
    public updated$ = new Subject();
}
