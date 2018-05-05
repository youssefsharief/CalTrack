import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'edit-my-info.component.html',
})
export class EditMyInfoComponent implements OnInit {
    public user
    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.user = this.authService.getProfile()
    }

    onEdited(data: User) {
        this.authService.saveProfile(data)
    }

}
