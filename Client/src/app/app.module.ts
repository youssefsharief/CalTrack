import { SignupSuccessComponent } from './routes/signup/signup-success/signup-success.component';
import { LoginComponent } from './routes/personal/login/login.component';
import {
    NewPasswordAndRecoveryCodeSubmissionComponent,
// tslint:disable-next-line:max-line-length
} from './routes/personal/recover-password-by-email/new-password-and-recovery-code-submission/new-password-and-recovery-code-submission.component';
import {
    ChangeMyPasswordUsingOldPasswordComponent,
} from './routes/personal/edit-my-info/change-my-password-using-old-password/change-my-password-using-old-password.component';
import { EmptyComponent } from './routes/empty/empty.component';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './routes/signup/signup.component';
import { OtherUserMealComponent } from './routes/other-user-meal/other-user-meal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { EditOtherUserInfoComponent } from './routes/edit-other-user-info/edit-other-user-info.component';
import { AddOtherUserMealComponent } from './routes/add-other-user-meal/add-other-user-meal.component';
import { EditOtherUserMealComponent } from './routes/edit-other-user-meal/edit-other-user-meal.component';
import { EditRoleComponent } from './routes/edit-role/edit-role.component';
import { UsersComponent } from './routes/users-list/users.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AddMyMealComponent } from 'app/routes/personal/add-my-meal/add-my-meal.component';
import { EditMyMealComponent } from 'app/routes/personal/edit-my-meal/edit-my-meal.component';
import { EditMyInfoComponent } from 'app/routes/personal/edit-my-info/edit-my-info.component';
import { MyMealComponent } from 'app/routes/personal/my-meal/my-meal.component';
import { ChangeOtherUserPasswordComponent } from 'app/routes/change-other-user-password/change-other-user-password.component';
import { CorruptLinkComponent } from 'app/routes/corrupt-link/corrupt-link.component';
import { RecoverPasswordByEmailComponent } from 'app/routes/personal/recover-password-by-email/recover-password-by-email.component';
// tslint:disable-next-line:max-line-length
import { PasswordRecoveredSuccessfullyComponent } from 'app/routes/personal/recover-password-by-email/new-password-and-recovery-code-submission/password-recovered-successfully/password-recovered-successfully.component';
import { ActivateAfterSignupComponent } from 'app/routes/signup/activate-after-signup/activate-after-signup.component';
import { CoreModule } from 'app/core/core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddMyMealComponent,
    AddOtherUserMealComponent,
    EditMyInfoComponent,
    EditMyMealComponent,
    EditOtherUserInfoComponent,
    EditMyMealComponent,
    EditOtherUserInfoComponent,
    EditOtherUserMealComponent,
    EditRoleComponent,
    LoginComponent,
    MyMealComponent,
    OtherUserMealComponent,
    SignupComponent,
    UsersComponent,
    EmptyComponent,
    SignupSuccessComponent,
    ActivateAfterSignupComponent,
    ChangeMyPasswordUsingOldPasswordComponent,
    ChangeOtherUserPasswordComponent,
    CorruptLinkComponent,
    RecoverPasswordByEmailComponent,
    NewPasswordAndRecoveryCodeSubmissionComponent,
    PasswordRecoveredSuccessfullyComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    PaginationModule.forRoot(),
    CoreModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
