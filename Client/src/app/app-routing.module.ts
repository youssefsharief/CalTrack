import { AuthGuardService } from './core/services/auth.guard.service';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AdminClaimsService } from './core/services/admin-claims.service';
import { MyMealsComponent } from 'app/routes/personal/my-meals/my-meals.component';
import { AddMyMealComponent } from 'app/routes/personal/add-my-meal/add-my-meal.component';
import { EditMyMealComponent } from 'app/routes/personal/edit-my-meal/edit-my-meal.component';
import { LoggedInGuardService } from 'app/core/services/logged-in.guard.service';

export const routes: Routes = [
    { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [LoggedInGuardService], },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule', canActivate: [LoggedInGuardService], },
    { path: 'email_password_recovery', loadChildren: './email-password-recovery/email-password-recovery.module#EmailPasswordRecoveryModule', canActivate: [LoggedInGuardService], },

    { path: 'invite', loadChildren: './invite-user/invite-user.module#InviteUserModule', canActivate: [AdminClaimsService] },

    { path: 'my-profile', loadChildren: './edit-my-info/edit-my-info.module#EditMyInfoModule', canActivate: [AuthGuardService] },

    { path: 'my-meals', component: MyMealsComponent, canActivate: [AuthGuardService], },
    { path: 'my-meals/add', component: AddMyMealComponent, canActivate: [AuthGuardService], },
    { path: 'my-meal/edit', component: EditMyMealComponent, canActivate: [AuthGuardService], },

    { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuardService], },
    { path: '', redirectTo: 'my-profile', pathMatch: 'full' },
    { path: '**', redirectTo: 'my-profile' }
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

