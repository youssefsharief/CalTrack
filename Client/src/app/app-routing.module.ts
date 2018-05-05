import { SignupSuccessComponent } from './signup/signup-success/signup-success.component';
import { ActivateAfterSignupComponent } from './signup/activate-after-signup/activate-after-signup.component';
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
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminClaimsService } from './core/services/admin-claims.service';
import { EditMyInfoComponent } from 'app/routes/personal/edit-my-info/edit-my-info.component';
import { MyMealsComponent } from 'app/routes/personal/my-meals/my-meals.component';
import { AddMyMealComponent } from 'app/routes/personal/add-my-meal/add-my-meal.component';
import { EditMyMealComponent } from 'app/routes/personal/edit-my-meal/edit-my-meal.component';
import { InviteUserComponent } from 'app/routes/invite-user/invite-user.component';
import { LoggedInGuardService } from 'app/core/services/logged-in.guard.service';

export const routes: Routes = [
    {
        path: '', component: AuthenticatedNavbarComponent, children: [
            { path: 'login',  loadChildren: './login/login.module#LoginModule', canActivate: [LoggedInGuardService],  },
            { path: 'signup',  loadChildren: './signup/signup.module#SignupModule', canActivate: [LoggedInGuardService],  },
            { path: 'recover_password_by_email', component: RecoverPasswordByEmailComponent, canActivate: [LoggedInGuardService], },
            { path: 'recover_password_by_email/submit_new_password', component: NewPasswordAndRecoveryCodeSubmissionComponent, canActivate: [LoggedInGuardService], },
            { path: 'password_recovered_successfully', component: PasswordRecoveredSuccessfullyComponent, canActivate: [LoggedInGuardService], },
            { path: 'invite', component: InviteUserComponent, canActivate: [AdminClaimsService] },
            { path: 'my-profile', component: EditMyInfoComponent, canActivate: [AuthGuardService], },
            { path: 'my-profile/password', component: ChangeMyPasswordUsingOldPasswordComponent, canActivate: [AuthGuardService], },
            { path: 'my-meals', component: MyMealsComponent, canActivate: [AuthGuardService], },
            { path: 'my-meals/add', component: AddMyMealComponent, canActivate: [AuthGuardService], },
            { path: 'my-meal/edit', component: EditMyMealComponent, canActivate: [AuthGuardService], },
            { path: 'users',  loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuardService],  },
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

