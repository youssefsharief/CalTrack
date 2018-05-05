import { NgModule } from '@angular/core';
import { LoginComponent } from 'app/login/login.component';
import { LoginRoutingModule } from 'app/login/login-routing.module';
import { SocialSignInModule } from 'app/shared/social-sign-in/social-sign-in.module';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';

@NgModule({
    imports: [
        LoginRoutingModule,
        SocialSignInModule,
        SharedFormsModule,
        SharedTrimmedModule
    ],
    declarations: [
        LoginComponent,
    ],
})
export class LoginModule {

}
