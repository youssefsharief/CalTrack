import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from 'app/core/services/data.service';
import { AuthService } from 'app/core/services/auth.service';
import { MealChangesService } from 'app/core/services/meal-changes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-progress-bar',
    templateUrl: 'progress-bar.component.html',
    styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {

    ngClass;
    ngClassBackground
    width;
    mealChanges$: Subscription
    caloriesConsumed: Number
    constructor(
        private dataService: DataService,
        private authService: AuthService,
        private mealChangesService: MealChangesService
    ) { }

    ngOnInit() {
        this.fetchForTodaysIntake();
    }

    private listenToMealChanges() {
        this.mealChanges$ = this.mealChangesService.updated$.subscribe(() => this.fetchForTodaysIntake())
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
