import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from 'app/core/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvironmentApiInterceptor } from 'app/core/http-interceptors/environment-api-url-interceptor';
import { UnAuthorizedRequestsInterceptor } from 'app/core/http-interceptors/unauthorized-requests-interceptor';
import { AuthInterceptor } from 'app/core/http-interceptors/authentication-interceptor';
import { TestRequest } from '@angular/common/http/testing/src/request';

describe('ApiService: DataService', () => {
    let httpMock: HttpTestingController;
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
            providers: [
                SnackBarService, RouterTestingModule,
                DataService,
                { provide: HTTP_INTERCEPTORS, useClass: EnvironmentApiInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: UnAuthorizedRequestsInterceptor, multi: true },
            ]
        });
        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(DataService);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('login', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.login({ email: 'a', password: 'a' }).subscribe()
            const req = httpMock.expectOne({ method: 'POST', url: 'https://localhost:3001/api/users/login' });
            expect(req.request.body).toEqual(Object({ email: 'a', password: 'a' }))
            req.flush(dummy);
        });
    });


    describe('signup', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.signup({ name: 's', email: 'a', password: 'a', isTrackingDisplayed: false }).subscribe()
            const req = httpMock.expectOne({ method: 'POST', url: 'https://localhost:3001/api/users' });
            expect(req.request.body).toEqual(Object({ name: 's', email: 'a', password: 'a', isTrackingDisplayed: false }))
            req.flush(dummy);
        });
    });


    describe('signup securely', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.signupSecurely({ name: 's', email: 'a', password: 'a', isTrackingDisplayed: false }).subscribe()
            const req = httpMock.expectOne({ method: 'POST', url: 'https://localhost:3001/api/users/secure' });
            expect(req.request.body).toEqual(Object({ name: 's', email: 'a', password: 'a', isTrackingDisplayed: false }))
            req.flush(dummy);
        });
    });

    describe('activate from backen', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.activateFromBackEnd('s', 'a').subscribe()
            const req = httpMock.expectOne({ method: 'POST', url: 'https://localhost:3001/api/activation' });
            expect(req.request.body).toEqual(Object({ code: 's', email: 'a' }))
            req.flush(dummy);
        });
    });

    describe('activate from backend', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.updateUserInfo('s', { name: 'a', email: 'a' }).subscribe()
            const req = httpMock.expectOne({ method: 'PUT', url: 'https://localhost:3001/api/users/s/info' });
            expect(req.request.body).toEqual(Object({ name: 'a', email: 'a' }))
            req.flush(dummy);
        });
    });


    describe('delete user', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.deleteUser('s').subscribe()
            const req = httpMock.expectOne({ method: 'DELETE', url: 'https://localhost:3001/api/users/s' });
            req.flush(dummy);
        });
    });

    describe('delete user', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.deleteUser('s').subscribe()
            const req = httpMock.expectOne({ method: 'DELETE', url: 'https://localhost:3001/api/users/s' });
            req.flush(dummy);
        });
    });

    describe('get users', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.getUsers({ skip: 10, searchTerm: 'aa' }).subscribe()
            const req = httpMock.expectOne(req => req.method === 'GET');
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users?skip=10&searchFilter=aa&roleFilter=')
            req.flush(dummy);
        });
    });

    describe('get meals', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.getMeals('1', { skip: 10, startDate: 'aa', endDate: 'dsa' }).subscribe()
            const req = httpMock.expectOne(req => req.method === 'GET');
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users/1/meals?skip=10&startDate=aa&endDate=dsa')
            req.flush(dummy);
        });

    });

    describe('Get user details', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.getUserDetails('s').subscribe()
            const req = httpMock.expectOne({ method: 'GET', url: 'https://localhost:3001/api/users/s' });
            req.flush(dummy);
        });
    });

    describe('Update meal', () => {
        it('should have appropriate url ', () => {
            const dummy = 'ok';
            service.updateMeal('s', 'e', { name: 'a', date: '14/07/2018', numOfCalories: 9 }).subscribe()
            const req = httpMock.expectOne(req => req.method === 'PUT');
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users/s/meals/e')
            expect(req.request.body).toEqual(Object({ name: 'a', date: '14/07/2018', numOfCalories: 9 }))
            req.flush(dummy);
        });
    });

    describe('Add meal', () => {
        let dummy;
        let req: TestRequest
        beforeEach(() => {
            dummy = 'ok';
            service.addMeal('s', { name: 'a', date: '14/07/2018', numOfCalories: 9 }).subscribe()
            req = httpMock.expectOne(req => req.method === 'POST');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users/s/meals')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({ name: 'a', date: '14/07/2018', numOfCalories: 9 }))
        });
    });

    describe('Delete meal', () => {
        let dummy;
        let req: TestRequest
        beforeEach(() => {
            dummy = 'ok';
            service.addMeal('s', { name: 'a', date: '14/07/2018', numOfCalories: 9 }).subscribe()
            req = httpMock.expectOne(req => req.method === 'POST');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users/s/meals')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({ name: 'a', date: '14/07/2018', numOfCalories: 9 }))
        });
    });


    describe('Assign user role', () => {
        let dummy;
        let req: TestRequest
        beforeEach(() => {
            dummy = 'ok';
            service.assignRole('s', { role: 'regular' }).subscribe()
            req = httpMock.expectOne(req => req.method === 'PATCH');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users/s/role')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({ role: 'regular' }))
        });
    });


    describe('Assign user role', () => {
        let dummy;
        let req: TestRequest
        beforeEach(() => {
            dummy = 'ok';
            service.assignRole('s', { role: 'regular' }).subscribe()
            req = httpMock.expectOne(req => req.method === 'PATCH');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users/s/role')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({ role: 'regular' }))
        });
    });


    describe('Forgotten password', () => {
        let dummy;
        let req: TestRequest
        beforeEach(() => {
            dummy = 'ok';
            service.forgottenPassword('saa@').subscribe()
            req = httpMock.expectOne(req => req.method === 'POST');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/recovery_code_requests')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({ email: 'saa@' }))
        });
    });

    describe('Forgotten password', () => {
        let dummy;
        let req: TestRequest
        beforeEach(() => {
            dummy = 'ok';
            service.changePasswordUsingOldPassword({ oldPassword: 'a', newPassword: 'w' }).subscribe()
            req = httpMock.expectOne(req => req.method === 'PATCH');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/password')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({ oldPassword: 'a', newPassword: 'w' }))
        });
    });


    describe('Change other user password', () => {
        let dummy;
        let req: TestRequest
        beforeEach(() => {
            dummy = 'ok';
            service.changeOtherUserPassword('a', 'w').subscribe()
            req = httpMock.expectOne(req => req.method === 'PATCH');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users/a/password')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({ newPassword: 'w' }))
        });
    });


    describe('Change password using recovery code', () => {
        let dummy;
        let req: TestRequest;
        beforeEach(() => {
            dummy = 'ok';
            service.changeMyPasswordUsingRecoveryCode({ recoveryCode: 'aaa', newPassword: 'qqq', email: 'aaa@e' }).subscribe()
            req = httpMock.expectOne(req => req.method === 'POST');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/recovery_code')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({ recoveryCode: 'aaa', newPassword: 'qqq', email: 'aaa@e' }))
        });
    });

    describe('activate user administratively', () => {
        let dummy;
        let req: TestRequest
        beforeEach(() => {
            dummy = 'ok';
            service.activateUserAdministratively('a').subscribe()
            req = httpMock.expectOne(req => req.method === 'PATCH');
        })
        afterEach(() => {
            req.flush(dummy);
        })
        it('should have appropriate url ', () => {
            expect(req.request.urlWithParams).toBe('https://localhost:3001/api/users/a/activation')
        });
        it('should have appropriate body ', () => {
            expect(req.request.body).toEqual(Object({}))
        });
    });
});
