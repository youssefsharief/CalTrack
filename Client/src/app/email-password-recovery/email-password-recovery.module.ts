import { NgModule } from '@angular/core';
import { PasswordRecoveredSuccessfullyComponent } from './password-recovered-successfully/password-recovered-successfully.component';
import { NewPasswordAndRecoveryCodeSubmissionComponent } from './new-password-and-recovery-code-submission/new-password-and-recovery-code-submission.component';
import { EmailPasswordRecoveryComponent } from './email-password-recovery.component';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { EmailPasswordRecoveryRoutingModule } from 'app/email-password-recovery/email-password-recovery-routing.module';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
    imports: [
        SharedFormsModule,
        EmailPasswordRecoveryRoutingModule,
        SharedTrimmedModule,
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule
    ],
    declarations: [
        EmailPasswordRecoveryComponent,
        PasswordRecoveredSuccessfullyComponent,
        NewPasswordAndRecoveryCodeSubmissionComponent
    ],
})
export class EmailPasswordRecoveryModule {

}

