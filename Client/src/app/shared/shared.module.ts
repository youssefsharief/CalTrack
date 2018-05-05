import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './components/meals/view-meal/meals.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgProgressModule } from 'ngx-progressbar';
import { MealFormComponent } from 'app/shared/components/meals/meal-form/meal-form.component';
import { AppInputsModule } from 'app/shared/components/ui-inputs/inputs.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    HttpModule,
    RouterModule,
    MatSnackBarModule,
    NgProgressModule,
    AppInputsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    PaginationModule.forRoot(),

  ],
  providers: [],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MealsComponent,
    MealFormComponent,
    EditUserComponent,
    NgProgressModule,
    AppInputsModule,
    TypeaheadModule,
    PaginationModule,
  ],
  declarations: [
    MealsComponent,
    MealFormComponent,
    EditUserComponent,
  ],
})
export class SharedModule { }
