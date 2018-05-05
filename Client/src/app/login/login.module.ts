import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from 'app/login/login.component';
import { AppInputsModule } from 'app/shared/components/ui-inputs/inputs.module';
import { LoginRoutingModule } from 'app/login/login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialSignInModule } from 'app/shared/social-sign-in/social-sign-in.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        AppInputsModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SocialSignInModule
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {

}
