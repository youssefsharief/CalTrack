import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Meal } from 'app/shared/models/meal.model';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { AuthService } from 'app/core/services/auth.service';

@Component({
    templateUrl: 'edit-my-meal.component.html',
})
export class EditMyMealComponent implements OnInit {
    meal

    constructor(
        private authService: AuthService,
        private router: Router,
        private dataService: DataService,
        private sb: SnackBarService,
        private mealsService: SelectedMealService
    ) { }

    ngOnInit() {
        if (!this.mealsService.getSelectedMeal()) {
            this.router.navigate(['/my-meals'])
        } else {
            this.meal = this.mealsService.getSelectedMeal()
            console.log(this.meal)
        }
    }

    onSubmitted(x: { name: string, date: string, numOfCalories: number }) {
        this.dataService.updateMeal(this.authService.getId(), this.meal._id, x).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.router.navigate(['/my-meals'])
            },
            error => this.sb.emitErrorSnackBar(error)
        )
    }


}
