import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../../../shared/models/meal.model';
import { AuthService } from 'app/core/services/auth.service';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { OnInit } from '@angular/core';

@Component({
    templateUrl: 'my-meal.component.html',
})
export class MyMealComponent implements OnInit {

    user: User
    constructor(
        private router: Router,
        private authService: AuthService,
        private dataService: DataService,
        private sb: SnackBarService,
    ) { }

    ngOnInit() {
        this.dataService.getUserDetails(this.authService.getId()).subscribe(
            data => this.user = data
        )
    }

    onAddClicked() {
        this.router.navigate(['/my-meal/add'])
    }

    onEditClicked(item: Meal) {
        this.router.navigate(['/my-meal/edit'])
    }

    onDeleteClicked(item) {
        this.dataService.deleteMealZone(this.user._id, item._id).subscribe(
            data => this.user.meals = this.user.meals.filter(t => t._id !== item._id),
            error => this.sb.emitErrorSnackBar(error)
        )
    }

}
