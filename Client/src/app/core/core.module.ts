import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { SnackBarService } from './services/snackbar.service';
import { AuthGuardService } from './services/auth.guard.service';
import { PublicInfoService } from './services/public.info.service';
import { AuthService } from './services/auth.service';
import { SelectedMealService } from './services/selected-meal.service';
import { DataService } from './services/data.service';
import { AdminClaimsService } from './services/admin-claims.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvironmentApiInterceptor } from 'app/core/http-interceptors/environment-api-url-interceptor';
import { UnAuthorizedRequestsInterceptor } from 'app/core/http-interceptors/unauthorized-requests-interceptor';
import { AuthInterceptor } from 'app/core/http-interceptors/authentication-interceptor';
import { NgProgressInterceptor } from 'ngx-progressbar';
import { DatePipe } from '@angular/common';
import { DateUtilityService } from 'app/core/services/date-utility.service';
import { LoggedInGuardService } from 'app/core/services/logged-in.guard.service';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker';

export function getTimepickerConfig(): TimepickerConfig {
    return Object.assign(new TimepickerConfig(), {
        arrowkeys: false,
        hourStep: 2,
        minuteStep: 10,
        showMeridian: false,
        readonlyInput: false,
        mousewheel: true,
        showMinutes: true,
        showSeconds: false,
    });
}

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [],
    providers: [
        AuthService,
        SnackBarService,
        SelectedMealService,
        DataService,
        AdminClaimsService,
        AuthGuardService,
        LoggedInGuardService,
        PublicInfoService,
        DatePipe,
        DateUtilityService,
        { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: EnvironmentApiInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: UnAuthorizedRequestsInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: APP_BASE_HREF, useValue: '/' },
        [{ provide: TimepickerConfig, useFactory: getTimepickerConfig }]
    ],

})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
