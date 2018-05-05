import { NgModule } from '@angular/core';
import { LoginComponent } from 'app/login/login.component';
import { LoginRoutingModule } from 'app/login/login-routing.module';
import { SocialSignInModule } from 'app/shared/social-sign-in/social-sign-in.module';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';

@NgModule({
    imports: [
        LoginRoutingModule,
        SocialSignInModule,
        SharedFormsModule
    ],
    declarations: [
        LoginComponent,
    ],
})
export class LoginModule {

}
