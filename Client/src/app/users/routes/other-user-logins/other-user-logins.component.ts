import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { first } from 'rxjs/operators'

@Component({
    templateUrl: 'other-user-logins.component.html',
    styleUrls: ['other-user-logins.component.scss']
})
export class OtherUserLoginsComponent implements OnInit {
    user: User
    constructor(
        private router: Router,
        private selectedUserService: SelectedUserService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.selectedUserService.getUserWithProbableDataFetch(this.route.params).pipe(first()).subscribe(
            data => this.user = data,
            error => this.router.navigate(['users'])
        )
    }
    navigateToChangeOtherUserPassword() {
        this.router.navigate(['users', this.user._id, 'password'])
    }

}
