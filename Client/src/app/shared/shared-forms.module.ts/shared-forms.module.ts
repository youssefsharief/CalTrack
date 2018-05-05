import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppInputsModule } from 'app/shared/components/ui-inputs/inputs.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AppInputsModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AppInputsModule
    ],
})
export class SharedFormsModule {

}

