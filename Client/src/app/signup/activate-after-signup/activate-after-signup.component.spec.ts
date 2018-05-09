import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { PublicInfoService } from 'app/core/services/public.info.service';
import { Location } from '@angular/common';
import { ActivateAfterSignupComponent } from 'app/signup/activate-after-signup/activate-after-signup.component';
import { SignupModule } from 'app/signup/signup.module';
import { User } from 'app/shared/models/user.model';
import { AppModule } from 'app/app.module';

describe('ActivateAfterSignupComponent Component', () => {
    let comp: ActivateAfterSignupComponent;
    let fixture: ComponentFixture<ActivateAfterSignupComponent>;
    let sb: SnackBarService
    let location: Location
    let dataService: DataService
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SignupModule, AppModule],
            providers: [
                { provide: DataService, useValue: {} },
                SnackBarService,
                PublicInfoService,
                Location
            ],
        });
        fixture = TestBed.createComponent(ActivateAfterSignupComponent);
        comp = fixture.componentInstance;

        dataService = fixture.debugElement.injector.get(DataService);
        location = fixture.debugElement.injector.get(Location);
        sb = fixture.debugElement.injector.get(SnackBarService);
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    describe('Initial markup', () => {
        describe('Form Validation', () => {
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
    })

    describe('Form Validation', () => {
        describe('valid email and activation code', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhkds@sa.com'
                emailInputElement.dispatchEvent(new Event('input'));
                const activationCodeInput = fixture.debugElement.query(By.css('input[name="activationCode"]'));
                const activationCodeInputElement = activationCodeInput.nativeElement
                activationCodeInputElement.value = '11111111111111111111'
                activationCodeInputElement.dispatchEvent(new Event('input'));
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

        describe('invalid email', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhkcom'
                emailInputElement.dispatchEvent(new Event('input'));
                const activationCodeInput = fixture.debugElement.query(By.css('input[name="activationCode"]'));
                const activationCodeInputElement = activationCodeInput.nativeElement
                activationCodeInputElement.value = '11111111111111111111'
                activationCodeInputElement.dispatchEvent(new Event('input'));
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

        describe('invalid code', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadsdjhkds@sa.com'
                emailInputElement.dispatchEvent(new Event('input'));
                const activationCodeInput = fixture.debugElement.query(By.css('input[name="activationCode"]'));
                const activationCodeInputElement = activationCodeInput.nativeElement
                activationCodeInputElement.value = '11111111111'
                activationCodeInputElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('error message should appear', () => {
                fixture.detectChanges()
                const y = fixture.debugElement.queryAll(By.css('p.text-danger'));
                expect(y[1].nativeElement.innerHTML).toContain('Please Enter')
                expect(y[1].properties.hidden).toBeFalsy();
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })
    })
    describe('Submitting Form', () => {
        beforeEach(() => {
            const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
            const emailInputElement = emailInput.nativeElement
            emailInputElement.value = 'aadsdjhkds@sa.com'
            emailInputElement.dispatchEvent(new Event('input'));
            const activationCodeInput = fixture.debugElement.query(By.css('input[name="activationCode"]'));
            const activationCodeInputElement = activationCodeInput.nativeElement
            activationCodeInputElement.value = '11111111111111111111'
            activationCodeInputElement.dispatchEvent(new Event('input'));
        })

        describe('Scenario: Success', () => {
            it('should call the right function', () => {
                dataService.activateFromBackEnd = (activationCode, email) => Observable.of(<{ token: string, user: User }>{})
                fixture.detectChanges();
                fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
            })
            fit('should successfully post', () => {
                dataService.activateFromBackEnd = (activationCode, email) => Observable.of(<{ token: string, user: User }>{})
                fixture.detectChanges();
                fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
            })
        })

        describe('Scenario: Error', () => {
            beforeEach(() => {
                const err = {
                    status: 400,
                    json() { return { error: 'thats an error' } }
                }
                dataService.signup = (data) => Observable.throw(err)
                fixture.detectChanges();
            })
            it('should handle error', () => {
                expect(comp).toBeTruthy()
            })
        })

    })


})
