import { Component, OnInit } from '@angular/core';
import { SelectedUserService } from '../../core/services/selectedUser.service';
import { Router } from '@angular/router';
import { Meal } from '../../shared/models/meal.model';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';

@Component({
    templateUrl: 'other-user-meals.component.html',
})
export class OtherUserMealsComponent implements OnInit {
    public user: User
    constructor(
        private selectedUserService: SelectedUserService,
        private router: Router,
        private route: ActivatedRoute,
        private sb: SnackBarService,
        private dataService: DataService,
    ) {
     }

    ngOnInit() {
        this.selectedUserService.getUserWithProbableDataFetch(this.route.params).subscribe(
            user => user ?  this.user = user : this.router.navigate(['/users/']))
    }

    onAddClicked() {
        this.router.navigate(['users', this.user._id, 'meal', 'add'])
    }

    onEditClicked(item: Meal) {
        this.router.navigate(['users', this.user._id, 'meal', 'edit'])
    }

    title() {
        return `${this.user.name}'s Meals`
    }

}
