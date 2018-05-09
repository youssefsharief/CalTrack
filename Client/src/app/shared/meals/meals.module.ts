import { NgModule } from '@angular/core';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';
import { PaginationModule } from 'ngx-bootstrap/pagination/pagination.module';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MealsComponent } from 'app/shared/meals/meals.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppInputsModule } from 'app/shared/components/ui-inputs/inputs.module';
import { UndoDeleteService } from 'app/core/services/undo-delete.service';

@NgModule({
    imports: [
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        PaginationModule.forRoot(),
        SharedTrimmedModule,
        CommonModule,
        FormsModule,
        AppInputsModule
    ],
    declarations: [
        MealsComponent
    ],
    providers: [
        UndoDeleteService
    ],
    exports: [
        MealsComponent
    ],
})
export class MealsModule {

}

