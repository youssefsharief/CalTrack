import { Component, OnInit } from '@angular/core';
import { SelectedUserService } from '../../core/services/selectedUser.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'app/shared/models/meal.model';
import { User } from 'app/shared/models/user.model';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { SelectedMealService } from 'app/core/services/selected-meal.service';

@Component({
    templateUrl: 'edit-other-user-meal.component.html',
})
export class EditOtherUserMealComponent implements OnInit {
    user: User
    meal: Meal

    constructor(
        private selectedUserService: SelectedUserService,
        private router: Router,
        private route: ActivatedRoute,
        private dataService: DataService,
        private sb: SnackBarService,
        private mealsService: SelectedMealService

    ) { }

    ngOnInit() {
        this.selectedUserService.getUserWithProbableDataFetch(this.route.params).subscribe(
            user => user ?  this.user = user : this.router.navigate(['/users/'])
        );
        this.meal = this.mealsService.getSelectedMeal()
    }


    onSubmitted(x: Meal) {
        this.dataService.updateMeal(this.user._id, this.meal._id, x).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.router.navigate(['/users/', this.user._id, 'meal'])
            },
            error => this.sb.emitErrorSnackBar(error)
        )
    }




}
