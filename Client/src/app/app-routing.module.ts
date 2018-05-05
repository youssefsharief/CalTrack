import { SignupSuccessComponent } from './routes/signup/signup-success/signup-success.component';
import { ActivateAfterSignupComponent } from './routes/signup/activate-after-signup/activate-after-signup.component';
import { LoginComponent } from './routes/personal/login/login.component';
import {
    PasswordRecoveredSuccessfullyComponent,
} from './routes/personal/recover-password-by-email/new-password-and-recovery-code-submission/password-recovered-successfully/password-recovered-successfully.component';
import {
    NewPasswordAndRecoveryCodeSubmissionComponent,
} from './routes/personal/recover-password-by-email/new-password-and-recovery-code-submission/new-password-and-recovery-code-submission.component';
import {
    RecoverPasswordByEmailComponent,
} from './routes/personal/recover-password-by-email/recover-password-by-email.component';
import {
    ChangeMyPasswordUsingOldPasswordComponent,
} from './routes/personal/edit-my-info/change-my-password-using-old-password/change-my-password-using-old-password.component';
import {
    AuthenticatedNavbarComponent,
} from './shared/components/layout/authenticated-navbar/authenticated-navbar.component';
import { AuthGuardService } from './core/services/auth.guard.service';
import { SignupComponent } from './routes/signup/signup.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminClaimsService } from './core/services/admin-claims.service';
import { UsersComponent } from './routes/users-list/users.component';
import { OtherUserMealsComponent } from './routes/other-user-meals/other-user-meals.component';
import { EditRoleComponent } from './routes/edit-role/edit-role.component';
import { AddOtherUserMealComponent } from './routes/add-other-user-meal/add-other-user-meal.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { EditOtherUserInfoComponent } from './routes/edit-other-user-info/edit-other-user-info.component';
import { LoginLayoutComponent } from './shared/components/layout/login-layout/login-layout.component';
import { EditOtherUserMealComponent } from './routes/edit-other-user-meal/edit-other-user-meal.component';
import { EditMyInfoComponent } from 'app/routes/personal/edit-my-info/edit-my-info.component';
import { MyMealsComponent } from 'app/routes/personal/my-meals/my-meals.component';
import { AddMyMealComponent } from 'app/routes/personal/add-my-meal/add-my-meal.component';
import { EditMyMealComponent } from 'app/routes/personal/edit-my-meal/edit-my-meal.component';
import { ChangeOtherUserPasswordComponent } from 'app/routes/change-other-user-password/change-other-user-password.component';
import { InviteUserComponent } from 'app/routes/invite-user/invite-user.component';
import { LoggedInGuardService } from 'app/core/services/logged-in.guard.service';

export const routes: Routes = [
    {
        path: '', component: AuthenticatedNavbarComponent, children: [
            { path: 'login', component: LoginComponent, canActivate: [LoggedInGuardService], },
            { path: 'signup', component: SignupComponent, canActivate: [LoggedInGuardService], },
            { path: 'signup/activate', component: ActivateAfterSignupComponent, canActivate: [LoggedInGuardService], },
            { path: 'signup/success', component: SignupSuccessComponent, canActivate: [LoggedInGuardService], },
            { path: 'recover_password_by_email', component: RecoverPasswordByEmailComponent, canActivate: [LoggedInGuardService], },
            { path: 'recover_password_by_email/submit_new_password', component: NewPasswordAndRecoveryCodeSubmissionComponent, canActivate: [LoggedInGuardService], },
            { path: 'password_recovered_successfully', component: PasswordRecoveredSuccessfullyComponent, canActivate: [LoggedInGuardService], },
            { path: 'invite', component: InviteUserComponent, canActivate: [AdminClaimsService] },
            { path: 'my-profile', component: EditMyInfoComponent, canActivate: [AuthGuardService], },
            { path: 'my-profile/password', component: ChangeMyPasswordUsingOldPasswordComponent, canActivate: [AuthGuardService], },
            { path: 'my-meals', component: MyMealsComponent, canActivate: [AuthGuardService], },
            { path: 'my-meals/add', component: AddMyMealComponent, canActivate: [AuthGuardService], },
            { path: 'my-meal/edit', component: EditMyMealComponent, canActivate: [AuthGuardService], },
            { path: 'users', component: UsersComponent, canActivate: [AuthGuardService], },
            { path: 'users/:id', component: EditOtherUserInfoComponent, canActivate: [AuthGuardService], },
            { path: 'users/:id/password', component: ChangeOtherUserPasswordComponent, canActivate: [AuthGuardService], },
            { path: 'users/:id/role', component: EditRoleComponent, canActivate: [AdminClaimsService] },
            { path: 'users/:id/meals', component: OtherUserMealsComponent, canActivate: [AdminClaimsService], },
            { path: 'users/:id/meals/add', component: AddOtherUserMealComponent, canActivate: [AuthGuardService], },
            { path: 'users/:id/meal/edit', component: EditOtherUserMealComponent, canActivate: [AuthGuardService], },
            { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
            { path: '**', redirectTo: 'my-profile' }
        ]
    },

]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

