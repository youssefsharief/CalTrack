import {
    ChangeMyPasswordUsingOldPasswordComponent,
} from './routes/personal/edit-my-info/change-my-password-using-old-password/change-my-password-using-old-password.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { AddMyMealComponent } from 'app/routes/personal/add-my-meal/add-my-meal.component';
import { EditMyMealComponent } from 'app/routes/personal/edit-my-meal/edit-my-meal.component';
import { EditMyInfoComponent } from 'app/routes/personal/edit-my-info/edit-my-info.component';
import { MyMealsComponent } from 'app/routes/personal/my-meals/my-meals.component';
import { CoreModule } from 'app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { InviteUserComponent } from 'app/routes/invite-user/invite-user.component';
import { SocialLoginModule } from 'angularx-social-login';
import { socialLoginConfig } from 'app/shared/config/social-login.config';
import { AuthServiceConfig } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function provideConfig() {
  return socialLoginConfig;
}

@NgModule({
  declarations: [
    AppComponent,
    AddMyMealComponent,
    EditMyInfoComponent,
    EditMyMealComponent,
    EditMyMealComponent,
    MyMealsComponent,
    ChangeMyPasswordUsingOldPasswordComponent,
    InviteUserComponent,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
