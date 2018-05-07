import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { DataService } from 'app/core/services/data.service';
import { CaloriesTrackingSubjectService } from 'app/core/services/calories-tracking-subject.service';

@Component({
    templateUrl: 'edit-my-info.component.html',
})

export class EditMyInfoComponent implements OnInit {
    public user: User
    constructor(
        private authService: AuthService,
        private dataService: DataService,
        private caloriesTrackingSubjectService: CaloriesTrackingSubjectService

    ) { }

    ngOnInit() {
        this.user = this.authService.getProfile()
    }

    onEdited(data: User) {
        if (data.isTrackingDisplayed !== this.user.isTrackingDisplayed || data.maxCalories !== this.user.maxCalories) {
            this.caloriesTrackingSubjectService.updated$.next()
        }
        this.authService.saveProfile(data)
        this.user = this.authService.getProfile()
    }



}
