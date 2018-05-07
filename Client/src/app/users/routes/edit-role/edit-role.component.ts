import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';

@Component({
    templateUrl: 'edit-role.component.html',
})
export class EditRoleComponent implements OnInit {
    user: User
    constructor(
        private dataService: DataService,
        private router: Router,
        private selectedUserService: SelectedUserService,
        private sb: SnackBarService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.selectedUserService.getUserWithProbableDataFetch(this.route.params).first().subscribe(user => this.user = user)
    }

    onAssignClick() {
        this.dataService.assignRole(this.user._id, { role: this.user.role }).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.router.navigate(['/users'])
            },
            error => this.sb.emitErrorSnackBar(error)
        )
    }

}
