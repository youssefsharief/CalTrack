import { NgModule } from '@angular/core';
import { SignupComponent } from 'app/signup/signup.component';
import { SignupSuccessComponent } from 'app/signup/signup-success/signup-success.component';
import { ActivateAfterSignupComponent } from 'app/signup/activate-after-signup/activate-after-signup.component';
import { SignupRoutingModule } from 'app/signup/signup-routing.module';
import { SocialSignInModule } from 'app/shared/social-sign-in/social-sign-in.module';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@NgModule({
    imports: [
        SocialSignInModule,
        SignupRoutingModule,
        SocialSignInModule,
        SharedFormsModule,
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule

    ],
    declarations: [
        SignupComponent,
        SignupSuccessComponent,
        ActivateAfterSignupComponent
    ],
})
export class SignupModule {

}
