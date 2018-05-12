import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthInterceptor } from 'app/core/http-interceptors/authentication-interceptor';
import { TestRequest } from '@angular/common/http/testing/src/request';
import { AuthService } from 'app/core/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { CoreModule } from 'app/core/core.module';
import { SocialLoginModule } from 'angularx-social-login';
import { AppModule } from 'app/app.module';

let httpMock: HttpTestingController;
let httpClient: HttpClient;
let service: DataService;

describe('Auth interceptor', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, AppModule],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                { provide: AuthService, useValue: { getToken() { return 'er' } } },
            ]
        });
        const injector = getTestBed();
        httpMock = injector.get(HttpTestingController);
        httpClient = injector.get(HttpClient);
        service = injector.get(DataService);
    });

    describe('intercept HTTP requests', () => {
        let dummy;
        let req: TestRequest;
        beforeEach(() => {
            dummy = 'ok';
            service.changeMyPasswordUsingRecoveryCode({ recoveryCode: 'sss', newPassword: 'qqq', email: 'asda@e' }).subscribe()
            req = httpMock.expectOne(req => req.method === 'POST');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate headers ', () => {
            expect(req.request.headers.get('Authorization')).toBe('Bearer er')
        });
    });
    afterEach(() => {
        httpMock.verify();
    });
});
