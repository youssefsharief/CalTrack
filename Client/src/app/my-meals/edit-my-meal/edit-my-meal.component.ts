import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
// import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { AuthService } from 'app/core/services/auth.service';
import { CaloriesTrackingSubjectService } from 'app/core/services/calories-tracking-subject.service';
import { first, flatMap } from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { State, getSelectedMeal } from 'app/reducers';
import { Observable } from 'rxjs';
import { Meal } from 'app/shared/models/meal.model';

@Component({
    templateUrl: 'edit-my-meal.component.html',
})
export class EditMyMealComponent implements OnInit {
    meal$: Observable<Meal>;

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService,
        private sb: SnackBarService,
        private store: Store<State>,
        // private mealsService: SelectedMealService,
        private caloriesTrackingSubjectService: CaloriesTrackingSubjectService
    ) { }

    ngOnInit() {
        
        this.meal$ = this.store.select(getSelectedMeal);
        if (!this.meal) {
            this.fetchForMeal()
        }

        this.store.dispatch(new FetchMeal());

    }

    private fetchForMeal() {
        this.route.params.pipe(
            first(),
            flatMap((data: any) => this.dataService.getMeal(this.authService.getId(), data.mealId))
        ).subscribe(
            data => {
                if (data) {
                    this.meal = data
                } else {
                    this.navigateBack()
                }
            },
            error => this.navigateBack()
        )
    }

    onSubmitted(x: { name: string, date: string, numOfCalories: number }) {
        this.dataService.updateMeal(this.authService.getId(), this.meal._id, x).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.navigateBack()
                this.caloriesTrackingSubjectService.updated$.next()
            },
            error => this.sb.emitErrorSnackBar(error.msg)
        )
    }

    private navigateBack() {
        this.router.navigate(['my-meals'])
    }


}
