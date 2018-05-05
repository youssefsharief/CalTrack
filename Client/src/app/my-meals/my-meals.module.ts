import { NgModule } from '@angular/core';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { InviteUserComponent } from 'app/invite-user/invite-user.component';
import { InviteUserRoutingModule } from 'app/invite-user/invite-user-routing.module';
import { EditMyMealComponent } from 'app/my-meals/edit-my-meal/edit-my-meal.component';
import { AddMyMealComponent } from 'app/my-meals/add-my-meal/add-my-meal.component';
import { MyMealsRoutingModule } from 'app/my-meals/my-meals-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { MyMealsComponent } from 'app/my-meals/my-meals.component';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';

@NgModule({
    imports: [
        SharedModule,
        MyMealsRoutingModule,
        SharedTrimmedModule
    ],
    declarations: [
        EditMyMealComponent,
        AddMyMealComponent,
        MyMealsComponent
    ],
})
export class MyMealsModule {

}

