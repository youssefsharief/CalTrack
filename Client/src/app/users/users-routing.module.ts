import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminClaimsService } from 'app/core/services/admin-claims.service';
import { EditOtherUserInfoComponent } from 'app/users/routes/edit-other-user-info/edit-other-user-info.component';
import { ChangeOtherUserPasswordComponent } from 'app/users/routes/change-other-user-password/change-other-user-password.component';
import { EditRoleComponent } from 'app/users/routes/edit-role/edit-role.component';
import { UsersComponent } from 'app/users/routes/users-list/users.component';
import { OtherUserMealsComponent } from 'app/users/routes/other-user-meals/other-user-meals.component';
import { AddOtherUserMealComponent } from 'app/users/routes/add-other-user-meal/add-other-user-meal.component';
import { EditOtherUserMealComponent } from 'app/users/routes/edit-other-user-meal/edit-other-user-meal.component';

const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: ':id', component: EditOtherUserInfoComponent },
    { path: ':id/password', component: ChangeOtherUserPasswordComponent },
    { path: ':id/role', component: EditRoleComponent, canActivate: [AdminClaimsService] },
    // { path: ':id/meals', loadChildren: './user-meals/user-meals.module#UserMealsModule', canActivate: [AdminClaimsService] },
    { path: ':id/meals', component: OtherUserMealsComponent, },
    { path: ':id/meals/add', component: AddOtherUserMealComponent },
    { path: ':id/meals/edit', component: EditOtherUserMealComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
