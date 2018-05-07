import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMealsComponent } from 'app/my-meals/my-meals.component';
import { EditMyMealComponent } from 'app/my-meals/edit-my-meal/edit-my-meal.component';
import { AddMyMealComponent } from 'app/my-meals/add-my-meal/add-my-meal.component';


const routes: Routes = [
    { path: '', component: MyMealsComponent },
    { path: 'add', component: AddMyMealComponent },
    { path: ':mealId', component: EditMyMealComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyMealsRoutingModule { }
