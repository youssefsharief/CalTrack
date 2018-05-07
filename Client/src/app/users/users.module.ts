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
import { AddOtherUserMealComponent } from 'app/users/routes/add-other-user-meal/add-other-user-meal.component';
import { EditOtherUserMealComponent } from 'app/users/routes/edit-other-user-meal/edit-other-user-meal.component';
import { OtherUserMealsComponent } from 'app/users/routes/other-user-meals/other-user-meals.component';
import { OtherUserLoginsComponent } from 'app/users/routes/other-user-logins/other-user-logins.component';
import { LoginsModule } from 'app/shared/logins/logins.module';

@NgModule({
    imports: [
        SharedModule,
        UsersRoutingModule,
        CommonModule,
        SharedTrimmedModule,
        UserFormModule,
        LoginsModule
    ],
    declarations: [
        UsersComponent,
        EditOtherUserInfoComponent,
        ChangeOtherUserPasswordComponent,
        EditRoleComponent,
        AddOtherUserMealComponent,
        EditOtherUserMealComponent,
        OtherUserMealsComponent,
        OtherUserLoginsComponent
    ],
    providers: [
        SelectedUserService
    ]
})
export class UsersModule { }
