import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { User } from 'app/shared/models/user.model';

@Component({
    templateUrl: 'edit-other-user-info.component.html',
})
export class EditOtherUserInfoComponent implements OnInit {
    public user: User
    constructor(
        private selectedUserService: SelectedUserService,
        private router: Router,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
        this.selectedUserService.getUserWithProbableDataFetch(this.route.params).first().subscribe(data =>  this.user = data )
    }

    navigateToChangeUserPassword() {
        this.router.navigate(['users', this.user._id, 'password'])
    }

}
