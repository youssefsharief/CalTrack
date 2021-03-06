import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { ChangeMyPasswordUsingOldPasswordComponent } from 'app/my-logins/change-my-password-using-old-password/change-my-password-using-old-password.component';
import { MyLoginsModule } from 'app/my-logins/my-logins.module';
import { AppModule } from 'app/app.module';

describe('Change MyPassword Using Old Password Component', () => {
    let comp: ChangeMyPasswordUsingOldPasswordComponent;
    let fixture: ComponentFixture<ChangeMyPasswordUsingOldPasswordComponent>;
    let dataService: DataService
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MyLoginsModule, AppModule],
            providers: [
                { provide: DataService, useValue: {} },
                SnackBarService,
            ],
        });
        fixture = TestBed.createComponent(ChangeMyPasswordUsingOldPasswordComponent);
        comp = fixture.componentInstance;
        dataService = fixture.debugElement.injector.get(DataService);
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    describe('route initially', () => {
        it('form should exist', () => {
            expect(fixture.debugElement.query(By.css('button[type="submit"]'))).toBeTruthy()
        })
        it('should be invalid', () => {
            expect(comp.form.invalid).toBe(true)
        })
        it('submit button should be disabled', () => {
            expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
        })
        it('error messages should be hidden', () => {
            expect(fixture.nativeElement.querySelectorAll('p.text-danger[hidden]').length).toBe(3)
        })
    })


    describe('form validation', () => {
        describe('valid password, new password, and confirm passsword', () => {
            beforeEach(() => {
                const oldPasswordInput = fixture.debugElement.query(By.css('input[name="oldPassword"]'));
                const oldPasswordInputElement = oldPasswordInput.nativeElement
                oldPasswordInputElement.value = '1234589457fh'
                oldPasswordInputElement.dispatchEvent(new Event('input'));
                const newPasswordInput = fixture.debugElement.query(By.css('input[name="newPassword"]'));
                const newPasswordInputElement = newPasswordInput.nativeElement
                newPasswordInputElement.value = 'ada456346sd'
                newPasswordInputElement.dispatchEvent(new Event('input'));
                const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
                const confirmPasswordInputElement = confirmPasswordInput.nativeElement
                confirmPasswordInputElement.value = 'ada456346sd'
                confirmPasswordInputElement.dispatchEvent(new Event('input'));
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

        describe('invalid new password', () => {
            beforeEach(() => {
                const oldPasswordInput = fixture.debugElement.query(By.css('input[name="oldPassword"]'));
                const oldPasswordInputElement = oldPasswordInput.nativeElement
                oldPasswordInputElement.value = '1234589457fh'
                oldPasswordInputElement.dispatchEvent(new Event('input'));
                const newPasswordInput = fixture.debugElement.query(By.css('input[name="newPassword"]'));
                const newPasswordInputElement = newPasswordInput.nativeElement
                newPasswordInputElement.value = '123'
                newPasswordInputElement.dispatchEvent(new Event('input'));
                const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
                const confirmPasswordInputElement = confirmPasswordInput.nativeElement
                confirmPasswordInputElement.value = '123'
                confirmPasswordInputElement.dispatchEvent(new Event('input'));
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

        describe('unsimilar password confirmation', () => {
            beforeEach(() => {
                const oldPasswordInput = fixture.debugElement.query(By.css('input[name="oldPassword"]'));
                const oldPasswordInputElement = oldPasswordInput.nativeElement
                oldPasswordInputElement.value = '1234589457fh'
                oldPasswordInputElement.dispatchEvent(new Event('input'));
                const newPasswordInput = fixture.debugElement.query(By.css('input[name="newPassword"]'));
                const newPasswordInputElement = newPasswordInput.nativeElement
                newPasswordInputElement.value = '12dfrfj4k56h3'
                newPasswordInputElement.dispatchEvent(new Event('input'));
                const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
                const confirmPasswordInputElement = confirmPasswordInput.nativeElement
                confirmPasswordInputElement.value = '12dfrfj4k56h3433434'
                confirmPasswordInputElement.dispatchEvent(new Event('input'));
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
    })

    describe('submitting form', () => {
        beforeEach(() => {
            const oldPasswordInput = fixture.debugElement.query(By.css('input[name="oldPassword"]'));
            const oldPasswordInputElement = oldPasswordInput.nativeElement
            oldPasswordInputElement.value = '1234589457fh'
            oldPasswordInputElement.dispatchEvent(new Event('input'));
            const newPasswordInput = fixture.debugElement.query(By.css('input[name="newPassword"]'));
            const newPasswordInputElement = newPasswordInput.nativeElement
            newPasswordInputElement.value = 'ada456346sd'
            newPasswordInputElement.dispatchEvent(new Event('input'));
            const confirmPasswordInput = fixture.debugElement.query(By.css('input[name="confirmPassword"]'));
            const confirmPasswordInputElement = confirmPasswordInput.nativeElement
            confirmPasswordInputElement.value = 'ada456346sd'
            confirmPasswordInputElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();
        })

        describe('success scenario', () => {
            beforeEach(() => {
                dataService.changePasswordUsingOldPassword = ({ oldPassword, newPassword }) => Observable.of('Ok')
            })
            it('should call api function with the correct parameters', () => {
                const spy = spyOn(dataService, 'changePasswordUsingOldPassword').and.callThrough()
                fixture.detectChanges();
                fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                expect(spy).toHaveBeenCalledWith(Object({ oldPassword: '1234589457fh', newPassword: 'ada456346sd' }))
            })
        })

        describe('error scenario', () => {
            it('should handle Error', () => {
                dataService.changePasswordUsingOldPassword = ({ oldPassword, newPassword }) => Observable.of('Ok')
                fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                expect(comp).toBeTruthy()
            })
        })
    })
})
