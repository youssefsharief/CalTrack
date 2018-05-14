import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'app/shared/models/meal.model';
import { User } from 'app/shared/models/user.model';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import 'rxjs/add/operator/first'

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
            user => {
                if (user) {
                    this.user = user
                    this.meal = this.mealsService.getSelectedMeal()
                    if (!this.meal) {
                        this.route.params.first().flatMap(data => this.dataService.getMeal(this.user._id, data.mealId))
                            .subscribe((
                                data => this.meal = data
                            ))
                    }
                } else {
                    this.router.navigate(['/users/'])
                }
            }
        );
    }


    onSubmitted(x: Meal) {
        this.dataService.updateMeal(this.user._id, this.meal._id, x).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.navigateBack()
            },
            error => this.sb.emitErrorSnackBar(error.msg)
        )
    }

    private navigateBack() {
        this.router.navigate(['users', this.user._id, 'meals'])
    }




}
