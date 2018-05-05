import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../../../shared/models/meal.model';
import { AuthService } from 'app/core/services/auth.service';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';
import { SnackBarService } from 'app/core/services/snackbar.service';

@Component({
    templateUrl: 'my-meals.component.html',
})
export class MyMealsComponent {

    userId = this.authService.getId()
    constructor(
        private router: Router,
        private authService: AuthService,
        private dataService: DataService,
        private sb: SnackBarService,
    ) { }

    onAddClicked() {
        this.router.navigate(['/my-meals/add'])
    }

    onEditClicked(item: Meal) {
        this.router.navigate(['/my-meal/edit'])
    }


}
