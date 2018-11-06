import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from 'app/core/services/data.service';
import { AuthService } from 'app/core/services/auth.service';
import { CaloriesTrackingSubjectService } from 'app/core/services/calories-tracking-subject.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-progress-bar',
    templateUrl: 'progress-bar.component.html',
    styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {

    ngClass;
    width;
    mealChanges$: Subscription
    caloriesConsumed: number
    constructor(
        private dataService: DataService,
        public authService: AuthService,
        private caloriesTrackingSubjectService: CaloriesTrackingSubjectService
    ) { }

    ngOnInit() {
        this.fetchForTodaysIntake();
        this.listenToMealChanges();
    }

    private listenToMealChanges() {
        this.mealChanges$ = this.caloriesTrackingSubjectService.updated$.subscribe(() => this.fetchForTodaysIntake())
    }

    private fetchForTodaysIntake() {
        this.dataService.getTodaysIntake(this.authService.getId()).subscribe(
            data => {
                this.caloriesConsumed = data
                const maxCalories = this.authService.getProfile().maxCalories
                this.ngClass = {
                    'success': this.caloriesConsumed <= maxCalories,
                    'danger': this.caloriesConsumed > maxCalories,
                };
                this.width = `${this.caloriesConsumed / maxCalories * 100}%`
            },
            error => console.log(error)
        )
    }

    ngOnDestroy() {
        if (this.mealChanges$) {
            this.mealChanges$.unsubscribe()
        }
    }

}
