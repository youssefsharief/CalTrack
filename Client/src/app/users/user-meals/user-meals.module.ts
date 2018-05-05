import { NgModule } from '@angular/core';
import { UsersRoutingModule } from 'app/users/users-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { OtherUserMealsComponent } from 'app/users/user-meals/other-user-meals/other-user-meals.component';
import { EditOtherUserMealComponent } from 'app/users/user-meals/edit-other-user-meal/edit-other-user-meal.component';
import { AddOtherUserMealComponent } from 'app/users/user-meals/add-other-user-meal/add-other-user-meal.component';
import { SelectedUserService } from 'app/users/services/selectedUser.service';


@NgModule({
    imports: [SharedModule, UsersRoutingModule],
    declarations: [
        OtherUserMealsComponent,
        AddOtherUserMealComponent,
        EditOtherUserMealComponent
    ],
    providers: [
        SelectedUserService
    ]
})
export class UserMealsModule { }
