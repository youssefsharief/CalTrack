import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { CoreModule } from 'app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule } from 'angularx-social-login';
import { socialLoginConfig } from 'app/shared/config/social-login.config';
import { AuthServiceConfig } from 'angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    { provide: AuthServiceConfig, useFactory: () => socialLoginConfig }
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
