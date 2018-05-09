import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { AppModule } from 'app/app.module';
import { LoginsComponent } from 'app/shared/logins/logins.component';
import { LoginsModule } from 'app/shared/logins/logins.module';

describe('Logins Component', () => {
    let comp: LoginsComponent;
    let fixture: ComponentFixture<LoginsComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LoginsModule, AppModule],
        });
        fixture = TestBed.createComponent(LoginsComponent);
        comp = fixture.componentInstance;
    });

    describe('Personal account', () => {
        beforeEach(() => {
            comp.isPersonal = true;
        })
        describe('user has only local login with no facebook and google', () => {
            beforeEach(() => {
                comp.user = {
                    name: 'aaaaa',
                    email: 'aaaaasd@dsl.com',
                    isTrackingDisplayed: true,
                    maxCalories: 3000
                }
                fixture.detectChanges();
            })

            it('should build successfully', () => {
                expect(comp).toBeTruthy()
            })

            describe('connecting facebook', () => {
                it('should be an option to connect facebook', () => {
                    expect(comp).toBeTruthy()
                })

            })

            it('should build successfully', () => {
                expect(comp).toBeTruthy()
            })

        })

        describe('user has only facebook', () => {
            beforeEach(() => {
                comp.user = {
                    name: 'aaaaa',
                    facebookEmail: 'aaaaasd@dsl.com',
                    facebookId: 'aaaaaaaa',
                    isTrackingDisplayed: true,
                    maxCalories: 3000
                }
                fixture.detectChanges();
            })

            it('should build successfully', () => {
                expect(comp).toBeTruthy()
            })
            it('connect facebook button should exist', () => {
                expect(fixture.nativeElement.querySelector('#connectGoogleBtn')).toBeTruthy()
            })
            it('should connect google', () => {
                const spy = spyOn(comp.connectGoogle, 'emit')
                fixture.nativeElement.querySelector('#connectGoogleBtn').click()
                expect(spy).toHaveBeenCalled()
            })
            it('add local login button should exist', () => {
                expect(fixture.nativeElement.querySelector('button[routerLink="/my-logins/add-local-login"]')).toBeTruthy()
            })
        })

        describe('user has only google', () => {
            beforeEach(() => {
                comp.user = {
                    name: 'aaaaa',
                    googleEmail: 'aaaaasd@dsl.com',
                    googleId: 'aaaaaaaa',
                    isTrackingDisplayed: true,
                    maxCalories: 3000
                }
                fixture.detectChanges();
            })

            it('should build successfully', () => {
                expect(comp).toBeTruthy()
            })
            it('connect facebook button should exist', () => {
                expect(fixture.nativeElement.querySelector('#connectFacebookBtn')).toBeTruthy()
            })
            it('should connect facebook', () => {
                const spy = spyOn(comp.connectFacebook, 'emit')
                fixture.nativeElement.querySelector('#connectFacebookBtn').click()
                expect(spy).toHaveBeenCalled()
            })
            it('add local login button should exist', () => {
                expect(fixture.nativeElement.querySelector('button[routerLink="/my-logins/add-local-login"]')).toBeTruthy()
            })

        })
    })
})
