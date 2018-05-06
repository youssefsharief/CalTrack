import { NgModule } from '@angular/core';
import { MyLoginsComponent } from './my-logins.component';
import { MyLoginsRoutingModule } from 'app/my-logins/my-logins-routing.module';
import { CommonModule } from '@angular/common';
import { AddLocalLoginComponent } from 'app/my-logins/add-local-login/add-local-login.component';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { ChangeMyPasswordUsingOldPasswordComponent } from 'app/my-logins/change-my-password-using-old-password/change-my-password-using-old-password.component';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';

@NgModule({
    imports: [
        MyLoginsRoutingModule,
        CommonModule,
        SharedFormsModule,
        SharedTrimmedModule
    ],
    declarations: [
        MyLoginsComponent,
        AddLocalLoginComponent,
        ChangeMyPasswordUsingOldPasswordComponent
    ],
})
export class MyLoginsModule {

}
