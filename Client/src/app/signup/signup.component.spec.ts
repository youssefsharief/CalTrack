import { SignupModule } from './signup.module';
import { SignupComponent } from './signup.component';
import { DebugElement, NgModuleFactoryLoader } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { NameInputLayoutComponent } from 'app/shared/components/ui-inputs/name-input-layout/name-input-layout.component';
import { PublicInfoService } from 'app/core/services/public.info.service';
import { Location } from '@angular/common';
import { User } from 'app/shared/models/user.model';
import { AppModule } from 'app/app.module';
import { EditMyInfoModule } from 'app/edit-my-info/edit-my-info.module';

describe('Signup Component', () => {

    let comp: SignupComponent;
    let fixture: ComponentFixture<SignupComponent>;
    let sb: SnackBarService
    let location: Location
    let router: Router
    const user = <User>{
        name: 'Ahmed',
        password: '454565',
        email: 'sads@ewew.com',

    }

    const dataServiceStub = {
        signUp(data) {
            return Observable.of(data)
        },
        login(data) {
            return Observable.of(data)
        }
    }
    let dataService: DataService

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SignupModule, SharedModule, AppModule],
            providers: [
                { provide: DataService, useValue: dataServiceStub },
                SnackBarService,
                PublicInfoService,
                Location
            ],
        });
        fixture = TestBed.createComponent(SignupComponent);
        comp = fixture.componentInstance;

        dataService = fixture.debugElement.injector.get(DataService);
        location = fixture.debugElement.injector.get(Location);
        sb = fixture.debugElement.injector.get(SnackBarService);
        router = TestBed.get(Router)
        const loader = fixture.debugElement.injector.get(NgModuleFactoryLoader);
        loader.stubbedModules = { lazyModule: EditMyInfoModule };
        router.resetConfig([
            { path: 'my-profile', loadChildren: '../edit-my-info/edit-my-info.module#EditMyInfoModule' },
        ]);
        fixture.detectChanges();
    });



    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    describe('initial markup', () => {
        describe('form validation', () => {
            describe('form initially', () => {
                it('should be invalid', () => {
                    expect(comp.form.invalid).toBe(true)
                })
                it('submit button should be disabled', () => {
                    expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
                })
                it('error messages should be hidden', () => {
                    expect(fixture.nativeElement.querySelectorAll('p.text-danger[hidden]').length).toBe(5)
                })
            })
        })
    })

    describe('form validation', () => {
        describe('valid email, password, confirm passsword, and name', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhkds@sa.com'
                emailInputElement.dispatchEvent(new Event('input'));
                const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
                const passwordInputElement = passwordInput.nativeElement
                passwordInputElement.value = 'ada456346sd'
                passwordInputElement.dispatchEvent(new Event('input'));
                const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
                const confirmPasswordInputElement = confirmPasswordInput.nativeElement
                confirmPasswordInputElement.value = 'ada456346sd'
                confirmPasswordInputElement.dispatchEvent(new Event('input'));
                const name = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameElement = name.nativeElement
                nameElement.value = 'YYYY'
                nameElement.dispatchEvent(new Event('input'));
                comp.form.get('g-recaptcha-response').setValue(true)
                fixture.detectChanges();
            })
            it('form should be valid', () => {
                expect(comp.form.invalid).toBe(false)
            })
            it('submit button should be enabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeFalsy()
                expect(fixture.nativeElement.querySelector('button[type="submit"]')).toBeTruthy()
            })
        })

        describe('invalid name', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjh@kdaom.com'
                emailInputElement.dispatchEvent(new Event('input'));
                const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
                const passwordInputElement = passwordInput.nativeElement
                passwordInputElement.value = 'ada456346sd'
                passwordInputElement.dispatchEvent(new Event('input'));
                const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
                const confirmPasswordInputElement = confirmPasswordInput.nativeElement
                confirmPasswordInputElement.value = 'ada456346sd'
                confirmPasswordInputElement.dispatchEvent(new Event('input'));
                const name = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameElement = name.nativeElement
                nameElement.value = 'YY'
                nameElement.dispatchEvent(new Event('input'));
                comp.form.get('g-recaptcha-response').setValue(true)
                fixture.detectChanges();
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('error message should appear', () => {
                fixture.detectChanges()
                const y = fixture.debugElement.queryAll(By.css('p.text-danger'));
                expect(y[0].nativeElement.innerHTML).toContain('Please enter')
                expect(y[0].properties.hidden).toBeFalsy();
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })

        describe('invalid email', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhkdaom'
                emailInputElement.dispatchEvent(new Event('input'));
                const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
                const passwordInputElement = passwordInput.nativeElement
                passwordInputElement.value = 'ada456346sd'
                passwordInputElement.dispatchEvent(new Event('input'));
                const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
                const confirmPasswordInputElement = confirmPasswordInput.nativeElement
                confirmPasswordInputElement.value = 'ada456346sd'
                confirmPasswordInputElement.dispatchEvent(new Event('input'));
                const name = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameElement = name.nativeElement
                nameElement.value = 'YYYY'
                nameElement.dispatchEvent(new Event('input'));
                comp.form.get('g-recaptcha-response').setValue(true)
                fixture.detectChanges();
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('error message should appear', () => {
                fixture.detectChanges()
                const y = fixture.debugElement.queryAll(By.css('p.text-danger'));
                expect(y[1].nativeElement.innerHTML).toContain('Please enter')
                expect(y[1].properties.hidden).toBeFalsy();
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })


        describe('invalid password', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhk@daom.com'
                emailInputElement.dispatchEvent(new Event('input'));
                const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
                const passwordInputElement = passwordInput.nativeElement
                passwordInputElement.value = '23'
                passwordInputElement.dispatchEvent(new Event('input'));
                const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
                const confirmPasswordInputElement = confirmPasswordInput.nativeElement
                confirmPasswordInputElement.value = '23'
                confirmPasswordInputElement.dispatchEvent(new Event('input'));
                const name = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameElement = name.nativeElement
                nameElement.value = 'YYYY'
                nameElement.dispatchEvent(new Event('input'));
                comp.form.get('g-recaptcha-response').setValue(true)
                fixture.detectChanges();
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('error message should appear', () => {
                fixture.detectChanges()
                const y = fixture.debugElement.queryAll(By.css('p.text-danger'));
                expect(y[2].nativeElement.innerHTML).toContain('Please enter')
                expect(y[2].properties.hidden).toBeFalsy();
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })

        describe('invalid second password', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhk@daom.com'
                emailInputElement.dispatchEvent(new Event('input'));
                const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
                const passwordInputElement = passwordInput.nativeElement
                passwordInputElement.value = '22323435fgt3'
                passwordInputElement.dispatchEvent(new Event('input'));
                const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
                const confirmPasswordInputElement = confirmPasswordInput.nativeElement
                confirmPasswordInputElement.value = '22323435fgt34'
                confirmPasswordInputElement.dispatchEvent(new Event('input'));
                const name = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameElement = name.nativeElement
                nameElement.value = 'YYYY'
                nameElement.dispatchEvent(new Event('input'));
                comp.form.get('g-recaptcha-response').setValue(true)
                fixture.detectChanges();
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('error message should appear', () => {
                fixture.detectChanges()
                const y = fixture.debugElement.queryAll(By.css('p.text-danger'));
                expect(y[3].nativeElement.innerHTML).toContain('Please enter')
                expect(y[3].properties.hidden).toBeFalsy();
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })
    })

    describe('submitting form', () => {
        beforeEach(() => {
            const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
            const emailInputElement = emailInput.nativeElement
            emailInputElement.value = 'aadsdjhk@daom.com'
            emailInputElement.dispatchEvent(new Event('input'));
            const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
            const passwordInputElement = passwordInput.nativeElement
            passwordInputElement.value = '22323435fgt3'
            passwordInputElement.dispatchEvent(new Event('input'));
            const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
            const confirmPasswordInputElement = confirmPasswordInput.nativeElement
            confirmPasswordInputElement.value = '22323435fgt3'
            confirmPasswordInputElement.dispatchEvent(new Event('input'));
            const name = fixture.debugElement.query(By.css('input[name="name"]'));
            const nameElement = name.nativeElement
            nameElement.value = 'YYYY'
            nameElement.dispatchEvent(new Event('input'));
            comp.form.get('g-recaptcha-response').setValue(true)
        })

        describe('Normal Signup', () => {
            describe('success scenario', () => {
                it('should successfully post', () => {
                    dataService.signup = (data) => Observable.of({ user, token: 'aaaa' })
                    fixture.detectChanges();
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                })
            })

            describe('error scenario', () => {
                beforeEach(() => {
                    const err = {
                        status: 400,
                        json() { return { error: 'thats an error' } }
                    }
                    dataService.signup = (data) => Observable.throw(err)
                    fixture.detectChanges();
                })
                it('snackbar should appear', () => {
                    const spy = spyOn(sb, 'emitErrorSnackBar')
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    fixture.detectChanges();
                    expect(spy).toHaveBeenCalled();
                })
            })
        })

        describe('Secure Signup', () => {
            describe('success scenario', () => {
                beforeEach(() => {
                    dataService.signupSecurely = (data) => Observable.of(user)
                })
                it('should successfully post', () => {
                    fixture.detectChanges();
                    fixture.debugElement.query(By.css('#secure-signup-button')).nativeElement.click()
                })
                it('should call the right arguments', () => {
                    fixture.detectChanges();
                    const spy = spyOn(dataService, 'signupSecurely').and.callThrough()
                    fixture.debugElement.query(By.css('#secure-signup-button')).nativeElement.click()
                    fixture.detectChanges()
                    expect(spy).toHaveBeenCalledWith(Object({ name: 'YYYY', email: 'aadsdjhk@daom.com', password: '22323435fgt3', maxCalories: 2250,
                     isTrackingDisplayed: true, 'g-recaptcha-response': true }))
                })

            })

            describe('error scenario', () => {
                beforeEach(() => {
                    const err = { status: 400, json() { return { error: 'thats an error' } } }
                    dataService.signupSecurely = (data) => Observable.throw(err)
                    fixture.detectChanges();
                })
                it('snackbar should appear', () => {
                    const spy = spyOn(sb, 'emitErrorSnackBar')
                    fixture.debugElement.query(By.css('#secure-signup-button')).nativeElement.click()
                    fixture.detectChanges();
                    expect(spy).toHaveBeenCalled();
                })
            })
        })

    })


})
