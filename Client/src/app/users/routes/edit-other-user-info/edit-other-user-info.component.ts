import { Component, OnInit } from '@angular/core';
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
        private route: ActivatedRoute
    ) {  }

    ngOnInit() {
        this.selectedUserService.getUserWithProbableDataFetch(this.route.params).first().subscribe(data =>  this.user = data )
    }

}
