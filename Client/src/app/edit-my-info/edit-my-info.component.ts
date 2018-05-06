import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { DataService } from 'app/core/services/data.service';

@Component({
    templateUrl: 'edit-my-info.component.html',
})

export class EditMyInfoComponent implements OnInit {
    public user: User
    constructor(
        private authService: AuthService,
        private dataService: DataService,

    ) { }

    ngOnInit() {
        this.user = this.authService.getProfile()
    }

    onEdited(data: User) {
        this.authService.saveProfile(data)
        this.user = this.authService.getProfile()
    }



}
