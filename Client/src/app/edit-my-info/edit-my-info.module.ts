import { NgModule } from '@angular/core';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { EditMyInfoComponent } from 'app/edit-my-info/edit-my-info.component';
import { ChangeMyPasswordUsingOldPasswordComponent } from 'app/edit-my-info/change-my-password-using-old-password/change-my-password-using-old-password.component';
import { EditMyInfoRoutingModule } from 'app/edit-my-info/edit-my-info-routing.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        EditMyInfoRoutingModule
    ],
    declarations: [
        EditMyInfoComponent,
        ChangeMyPasswordUsingOldPasswordComponent
    ],
})
export class EditMyInfoModule {

}

