import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Meal } from 'app/shared/models/meal.model';
import { SelectedMealService } from 'app/core/services/selected-meal.service';

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
            this.router.navigate(['/my-meal'])
        } else {
            this.meal = this.mealsService.getSelectedMeal()
        }
    }

    onSubmitted(x: { name: string, date: string, calories: number }) {
        this.dataService.updateMeal(this.authService.getId(), this.meal._id, x).first().subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.router.navigate(['/my-meal'])
            },
            error => this.sb.emitErrorSnackBar(error)
        )
    }


}
