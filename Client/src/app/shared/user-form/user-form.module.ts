import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form.component';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';

@NgModule({
    imports: [
        SharedFormsModule
    ],
    declarations: [
        UserFormComponent,
    ],
    exports: [
        UserFormComponent,
    ]
})
export class UserFormModule {

}
