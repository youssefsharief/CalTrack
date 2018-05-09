import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { LoginComponent } from 'app/login/login.component';
import { DataService } from 'app/core/services/data.service';
import { AuthService } from 'app/core/services/auth.service';
import { By } from '@angular/platform-browser';
import { SignupComponent } from 'app/signup/signup.component';
import { Location } from '@angular/common';
import { User } from 'app/shared/models/user.model';
import { LoginModule } from 'app/login/login.module';
import { AppModule } from 'app/app.module';
import { Router } from '@angular/router';
import { NgModuleFactoryLoader } from '@angular/core';
import { MyMealsModule } from 'app/my-meals/my-meals.module';

describe('Login Component', () => {
    let comp: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let sb: SnackBarService
    let location: Location
    let router: Router
    const user = <User>{
        name: 'Ahmed',
        email: 'd',
    }

    class MockError extends Response implements Error {
        name: any
        message: any
    }


    const dataServiceStub = {}
    let dataService: DataService

    const authServiceStub = {
        saveToken(token) { },
        saveProfile(user) { }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LoginModule, AppModule],
            providers: [
                { provide: DataService, useValue: dataServiceStub },
                SnackBarService,
                { provide: AuthService, useValue: authServiceStub },
                Location
            ],
        });
        fixture = TestBed.createComponent(LoginComponent);
        comp = fixture.componentInstance;
        dataService = fixture.debugElement.injector.get(DataService);
        sb = fixture.debugElement.injector.get(SnackBarService);
        location = fixture.debugElement.injector.get(Location);
        router = TestBed.get(Router);
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })


    describe('Initial Html', () => {
        it('jumbotron should not appear', () => {
            expect(fixture.debugElement.query(By.css('jumbotron'))).toBeFalsy();
        })
        describe('form initially', () => {
            it('should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
            it('error messages should be hidden', () => {
                expect(fixture.nativeElement.querySelectorAll('p.text-danger[hidden]').length).toBe(2)
            })
        })
    })

    describe('Form Validation', () => {
        describe('valid email and password', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhkds@sa.com'
                emailInputElement.dispatchEvent(new Event('input'));
                const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
                const passwordInputElement = passwordInput.nativeElement
                passwordInputElement.value = 'ada456346sd'
                passwordInputElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            it('form should be valid', () => {
                expect(comp.form.invalid).toBe(false)
            })
            it('submit button should be enabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeFalsy()
            })
        })

        describe('form with unvalid email', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhkdscom'
                emailInputElement.dispatchEvent(new Event('input'));
                const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
                const passwordInputElement = passwordInput.nativeElement
                passwordInputElement.value = 'ada456346sd'
                passwordInputElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('error message should appear', () => {
                fixture.detectChanges()
                const y = fixture.debugElement.queryAll(By.css('p.text-danger'));
                expect(y[0].nativeElement.innerHTML).toContain('Please Enter')
                expect(y[0].properties.hidden).toBeFalsy();
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })

        describe('form with unvalid password', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhkds@sa.com'
                emailInputElement.dispatchEvent(new Event('input'));
                const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
                const passwordInputElement = passwordInput.nativeElement
                passwordInputElement.value = 'add'
                passwordInputElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            it('form should be still be valid', () => {
                expect(comp.form.invalid).toBe(false)
            })
            it('submit button should be enabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeFalsy()
            })
        })


    })


    describe('Submitting Form', () => {
        beforeEach(() => {
            const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
            const emailInputElement = emailInput.nativeElement
            emailInputElement.value = 'aadsdjhkds@sa.com'
            emailInputElement.dispatchEvent(new Event('input'));
            const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
            const passwordInputElement = passwordInput.nativeElement
            passwordInputElement.value = 'ada456346sd'
            passwordInputElement.dispatchEvent(new Event('input'));
        })



        describe('Scenario: Error', () => {
            describe('403', () => {
                beforeEach(() => {
                    const err = {
                        status: 403,
                        json() { return { error: 'thats an error' } }
                    }
                    dataService.login = (data) => Observable.throw(err)
                    fixture.detectChanges();
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    fixture.detectChanges();
                })
                it('Please check your email for activation code message should appear', () => {
                    expect(fixture.debugElement.queryAll(By.css('jumbotron'))).toBeTruthy();
                })
            })

            describe('Other Error', () => {
                beforeEach(() => {
                    const err = {
                        status: 400,
                        json() { return { error: 'thats an error' } }
                    }
                    dataService.login = (data) => Observable.throw(err)
                    fixture.detectChanges();
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    fixture.detectChanges();
                })
                it('component should handle error', () => {
                    expect(comp).toBeTruthy()
                })
            })
        })

    })


})
