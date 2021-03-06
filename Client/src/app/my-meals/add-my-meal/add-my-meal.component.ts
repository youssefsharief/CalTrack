import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Meal } from 'app/shared/models/meal.model';
import { AuthService } from 'app/core/services/auth.service';
import { CaloriesTrackingSubjectService } from 'app/core/services/calories-tracking-subject.service';

@Component({
    templateUrl: 'add-my-meal.component.html',
})
export class AddMyMealComponent {

    constructor(
        private authService: AuthService,
        private router: Router,
        private dataService: DataService,
        private sb: SnackBarService,
        private caloriesTrackingSubjectService: CaloriesTrackingSubjectService
    ) {  }

    onSubmitted(x: Meal) {
        this.dataService.addMeal(this.authService.getId(), x).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.caloriesTrackingSubjectService.updated$.next()
                this.router.navigate(['/my-meals'])
            },
            error => this.sb.emitErrorSnackBar(error.msg)
        )
    }

}
