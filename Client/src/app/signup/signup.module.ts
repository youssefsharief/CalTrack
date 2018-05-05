import { NgModule } from '@angular/core';
import { SignupComponent } from 'app/signup/signup.component';
import { SignupSuccessComponent } from 'app/signup/signup-success/signup-success.component';
import { ActivateAfterSignupComponent } from 'app/signup/activate-after-signup/activate-after-signup.component';
import { SignupRoutingModule } from 'app/signup/signup-routing.module';
import { SocialSignInModule } from 'app/shared/social-sign-in/social-sign-in.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppInputsModule } from 'app/shared/components/ui-inputs/inputs.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        AppInputsModule,
        FormsModule,
        ReactiveFormsModule,
        SocialSignInModule,
        SignupRoutingModule,
        SocialSignInModule,
    ],
    declarations: [
        SignupComponent,
        SignupSuccessComponent,
        ActivateAfterSignupComponent
    ],
})
export class SignupModule {

}
