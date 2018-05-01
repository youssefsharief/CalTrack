import { Component, OnInit } from '@angular/core';
import { SelectedUserService } from '../../core/services/selectedUser.service';
import { Router } from '@angular/router';
import { Meal } from '../../shared/models/meal.model';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';

@Component({
    templateUrl: 'other-user-meal.component.html',
})
export class OtherUserMealComponent implements OnInit {
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
        this.route.params.first().flatMap(data => this.dataService.getUserDetails(data.id).first()).subscribe(
            data =>  this.user = data,
            error => this.sb.emitErrorSnackBar(error)
        )
    }

    onDeleteClicked(item) {
        this.dataService.deleteMealZone(this.user._id, item._id).subscribe(
            data => this.user.meals = this.user.meals.filter(t => t._id !== item._id),
            error => this.sb.emitErrorSnackBar(error)
        )
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
