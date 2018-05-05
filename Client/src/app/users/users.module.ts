import { NgModule } from '@angular/core';
import { UsersRoutingModule } from 'app/users/users-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { AdminClaimsService } from 'app/core/services/admin-claims.service';
import { ChangeOtherUserPasswordComponent } from 'app/users/routes/change-other-user-password/change-other-user-password.component';
import { EditOtherUserInfoComponent } from 'app/users/routes/edit-other-user-info/edit-other-user-info.component';
import { UsersComponent } from 'app/users/routes/users-list/users.component';
import { EditRoleComponent } from 'app/users/routes/edit-role/edit-role.component';
import { CommonModule } from '@angular/common';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';
import { UserFormModule } from 'app/shared/user-form/user-form.module';

@NgModule({
    imports: [
        SharedModule,
        UsersRoutingModule,
        CommonModule,
        SharedTrimmedModule,
        UserFormModule
    ],
    declarations: [
        UsersComponent,
        EditOtherUserInfoComponent,
        ChangeOtherUserPasswordComponent,
        EditRoleComponent,
    ],
    providers: [
        SelectedUserService
    ]
})
export class UsersModule { }
