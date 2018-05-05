import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Meal } from 'app/shared/models/meal.model';

@Component({
    templateUrl: 'add-my-meal.component.html',
})
export class AddMyMealComponent {

    constructor(
        private authService: AuthService,
        private router: Router,
        private dataService: DataService,
        private sb: SnackBarService,
    ) {  }

    onSubmitted(x: Meal) {
        this.dataService.addMeal(this.authService.getId(), x).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.router.navigate(['/my-meals'])
            },
            error => this.sb.emitErrorSnackBar(error)
        )
    }

}
