import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { AppModule } from 'app/app.module';
import { DataService } from 'app/core/services/data.service';
import { InviteUserModule } from 'app/invite-user/invite-user.module';
import { InviteUserComponent } from 'app/invite-user/invite-user.component';
import { SharedModule } from 'app/shared/shared.module';
import { CoreModule } from 'app/core/core.module';

describe('InviteUser Component', () => {
    let comp: InviteUserComponent;
    let fixture: ComponentFixture<InviteUserComponent>;
    let dataService: DataService
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [InviteUserModule, SharedModule, CoreModule],
            providers: [
                { provide: DataService, useValue: {} },
            ],
        });
        fixture = TestBed.createComponent(InviteUserComponent);
        comp = fixture.componentInstance;
        dataService = fixture.debugElement.injector.get(DataService)
    });

    describe('Form Validation', () => {
        beforeEach(() => {
            fixture.detectChanges();
        })
        describe('invalid email', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'aadssm'
                emailInputElement.dispatchEvent(new Event('input'));
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


        describe('valid form', () => {
            beforeEach(() => {
                const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
                const emailInputElement = emailInput.nativeElement
                emailInputElement.value = 'sdafg@dsds.com'
                emailInputElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            it('form should be valid', () => {
                expect(comp.form.invalid).toBe(false)
            })
            it('submit button should be enabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeFalsy()
            })
            it('error message should not appear', () => {
                fixture.detectChanges()
                const y = fixture.debugElement.queryAll(By.css('p.text-danger'));
                expect(y[0].properties.hidden).toBeTruthy();
            })

            describe('Submitting Form', () => {
                describe('Success Scenario', () => {
                    beforeEach(() => {
                        dataService.inviteUser = (id, payload) => Observable.of('ok')
                    })
                    describe('api call', () => {
                        let spy
                        beforeEach(() => {
                            spy = spyOn(dataService, 'inviteUser').and.callThrough()
                        })
                        it('should successfully post', () => {
                            fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                            expect(spy).toHaveBeenCalled();
                        })
                        it('should call with right arguments', () => {
                            fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                            expect(spy).toHaveBeenCalledWith('sdafg@dsds.com', 'http://localhost:9876/signup');
                        })
                    })
                })
                describe('Error Scenario', () => {
                    beforeEach(() => {
                        dataService.inviteUser = (id, payload) => Observable.throw('Error')
                        fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    })
                    it('should handle error', () => {
                        expect(comp).toBeTruthy();
                    })
                })
            })
        })






    })

})
