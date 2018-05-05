import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { SignupComponent } from 'app/signup/signup.component';
import { SignupSuccessComponent } from 'app/signup/signup-success/signup-success.component';
import { ActivateAfterSignupComponent } from 'app/signup/activate-after-signup/activate-after-signup.component';
import { SignupRoutingModule } from 'app/signup/signup-routing.module';

@NgModule({
    imports: [
        SignupRoutingModule,
        SharedModule
    ],
    declarations: [
        SignupComponent,
        SignupSuccessComponent,
        ActivateAfterSignupComponent
    ],
})
export class SignupModule {

}
