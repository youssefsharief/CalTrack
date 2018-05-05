import { NgModule } from '@angular/core';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { EditMyInfoComponent } from 'app/edit-my-info/edit-my-info.component';
import { ChangeMyPasswordUsingOldPasswordComponent } from 'app/edit-my-info/change-my-password-using-old-password/change-my-password-using-old-password.component';
import { EditMyInfoRoutingModule } from 'app/edit-my-info/edit-my-info-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';
import { UserFormModule } from 'app/shared/user-form/user-form.module';

@NgModule({
    imports: [
        SharedModule,
        EditMyInfoRoutingModule,
        SharedTrimmedModule,
        UserFormModule
    ],
    declarations: [
        EditMyInfoComponent,
        ChangeMyPasswordUsingOldPasswordComponent
    ],
})
export class EditMyInfoModule {

}

