import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminClaimsService } from './core/services/admin-claims.service';
import { LoggedInGuardService } from 'app/core/services/logged-in.guard.service';
import { AuthGuardService } from './core/services/auth.guard.service';

export const routes: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [LoggedInGuardService], },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule', canActivate: [LoggedInGuardService], },
    { path: 'email_password_recovery', loadChildren: './email-password-recovery/email-password-recovery.module#EmailPasswordRecoveryModule', canActivate: [LoggedInGuardService], },
    { path: 'invite', loadChildren: './invite-user/invite-user.module#InviteUserModule', canActivate: [AdminClaimsService] },
    { path: 'my-profile', loadChildren: './edit-my-info/edit-my-info.module#EditMyInfoModule', canActivate: [AuthGuardService] },
    { path: 'my-meals', loadChildren: './my-meals/my-meals.module#MyMealsModule', canActivate: [AuthGuardService] },
    { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuardService], },
    { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
    { path: '**', redirectTo: 'my-profile' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

