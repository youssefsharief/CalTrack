import { NgModule } from '@angular/core';
import { AdminClaimsService } from 'app/core/services/admin-claims.service';
import { RouterModule, Routes } from '@angular/router';
import { OtherUserMealsComponent } from 'app/users/user-meals/other-user-meals/other-user-meals.component';
import { AddOtherUserMealComponent } from 'app/users/user-meals/add-other-user-meal/add-other-user-meal.component';
import { EditOtherUserMealComponent } from 'app/users/user-meals/edit-other-user-meal/edit-other-user-meal.component';

const routes: Routes = [
    { path: '', component: OtherUserMealsComponent, },
    { path: 'add', component: AddOtherUserMealComponent },
    { path: 'edit', component: EditOtherUserMealComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
