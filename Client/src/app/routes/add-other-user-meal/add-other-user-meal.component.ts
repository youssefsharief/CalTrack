import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectedUserService } from '../../core/services/selectedUser.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Meal } from 'app/shared/models/meal.model';
import { User } from 'app/shared/models/user.model';
import { DataService } from 'app/core/services/data.service';

@Component({
    templateUrl: 'add-other-user-meal.component.html',
})
export class AddOtherUserMealComponent implements OnInit {
    user: User
    constructor(
        private selectedUserService: SelectedUserService,
        private router: Router,
        private route: ActivatedRoute,
        private sb: SnackBarService,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.selectedUserService.getUserWithProbableDataFetch(this.route.params).subscribe(
            user => user ?  this.user = user : this.router.navigate(['/users/'])
        );
    }


    onSubmitted(x: Meal) {
        this.dataService.addMeal(this.user._id, x).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.router.navigate(['/users/', this.user._id, 'meals' ])
            },
            error => this.sb.emitErrorSnackBar(error)
        )
    }



}
