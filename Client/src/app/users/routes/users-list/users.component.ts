import { Subject } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { roles } from 'app/shared/config/constants';
import { AdminClaimsService } from 'app/core/services/admin-claims.service';
import { User } from 'app/shared/models/user.model';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { AuthService } from 'app/core/services/auth.service';
import { DataService } from 'app/core/services/data.service';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { UndoDeleteService } from 'app/core/services/undo-delete.service';

@Component({
    templateUrl: 'users.component.html',
})
export class UsersComponent implements OnInit, OnDestroy {
    users: User[] = []
    totalItems: number
    searchTerm: string
    roleFilter: string;
    currentPage: number
    keyUp$ = new Subject<string>()
    searchSubscription: Subscription
    roles = roles
    constructor(
        private adminClaimsService: AdminClaimsService,
        private router: Router,
        private selectedUserService: SelectedUserService,
        private dataService: DataService,
        private sb: SnackBarService,
        private authService: AuthService,
        private undoDeleteService: UndoDeleteService,
        private ref: ChangeDetectorRef
    ) { }


    ngOnInit() {
        this.fetchUsers({ page: 1 })
        this.searchSubscription =
            this.keyUp$.debounceTime(400).distinctUntilChanged().subscribe(() => {
                this.fetchConsideringPaging()
            })
    }

    public fetchConsideringPaging() {
        if (this.currentPage === 1) {
            this.fetchUsers({ page: 1 })
        } else {
            this.currentPage = 1
        }
    }

    public fetchUsers({ page }) {
        this.dataService.getUsers({ roleFilter: this.roleFilter, searchTerm: this.searchTerm, skip: (page - 1) * 10 }).debounceTime(50000)
        .subscribe(
            data => {
                this.users = data.users
                this.totalItems = data.count
            },
            error => this.sb.emitErrorSnackBar(error)
        )
    }

    isAdmin() {
        return this.authService.getRole() === 'admin'
    }

    onChangeRoleClick(item) {
        this.selectedUserService.set(item)
        this.router.navigate(['/users', item._id, 'role'])
    }


    onDeleteClick(item) {
        this.undoDeleteService.init(this.users, 'User').first().subscribe(
            oldItems => {
                if (oldItems) {
                    this.users = oldItems
                    this.ref.detectChanges()
                } else {
                    this.deleteFromBackend(item._id)
                }
            }
        )
        this.users = this.users.filter(user => user._id !== item._id)
    }

    private deleteFromBackend(userId) {
        this.dataService.deleteUser(userId).subscribe(
            data => this.fetchUsers({ page: this.currentPage }),
            error => this.fetchUsers({ page: this.currentPage }),
        )
    }

    onUpdateClick(item) {
        this.selectedUserService.set(item)
        this.router.navigate(['/users', item._id])
    }

    onMealsClick(item) {
        this.selectedUserService.set(item)
        this.router.navigate(['/users', item._id, 'meals'])
    }

    ngOnDestroy() {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe()
        }
    }

    onActivateClick(item) {
        this.dataService.activateUserAdministratively(item._id).subscribe(
            data => item.active = true,
            error => this.sb.emitErrorSnackBar(error)
        )
    }

    onLoginsClick(item) {
        this.selectedUserService.set(item)
        this.router.navigate(['/users', item._id, 'logins'])
    }

}
