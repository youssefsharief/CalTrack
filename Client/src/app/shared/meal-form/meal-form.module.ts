import { NgModule } from '@angular/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MealsComponent } from 'app/shared/meals/meals.component';
import { MealFormComponent } from 'app/shared/meal-form/meal-form.component';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';

@NgModule({
    imports: [
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        SharedFormsModule
    ],
    declarations: [
        MealFormComponent
    ],
    exports: [
        MealFormComponent
    ],
})
export class MealFormModule {

}

