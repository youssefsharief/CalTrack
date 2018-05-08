import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { Location } from '@angular/common';
import { AuthService } from 'app/core/services/auth.service';
import { EditMyInfoComponent } from 'app/edit-my-info/edit-my-info.component';
import { EditMyInfoModule } from 'app/edit-my-info/edit-my-info.module';
import { ChangeMyPasswordUsingOldPasswordComponent } from 'app/my-logins/change-my-password-using-old-password/change-my-password-using-old-password.component';
import { CoreModule } from 'app/core/core.module';

describe('EditMyInfo Component', () => {
    let comp: EditMyInfoComponent;
    let fixture: ComponentFixture<EditMyInfoComponent>;
    let location: Location
    let authService: AuthService
    let dataService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, EditMyInfoModule, CoreModule],
            providers: [
                { provide: AuthService, useValue: { getProfile() { return { _id: 'rr', name: 'aaaa', email: 'aadr@rsde.com' } }, saveProfile(a) { } } },
                { provide: DataService, useValue: {} },
                SnackBarService
            ],
        });
        fixture = TestBed.createComponent(EditMyInfoComponent);
        comp = fixture.componentInstance;
        authService = fixture.debugElement.injector.get(AuthService);
        location = fixture.debugElement.injector.get(Location);
        dataService = fixture.debugElement.injector.get(DataService)
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    // describe('Navigation', () => {
    //     it('Change my password should navigate to the right page', fakeAsync(() => {
    //         fixture.nativeElement.querySelector('#change-my-password-button').click()
    //         tick()
    //         expect(location.path()).toBe('/my-profile/password')
    //     }))
    // })
    describe('Submitting Form', () => {
        beforeEach(() => {
            const name = fixture.debugElement.query(By.css('input[name="name"]'));
            const nameElement = name.nativeElement
            nameElement.value = 'YYYY'
            nameElement.dispatchEvent(new Event('input'));
            const maxCalories = fixture.debugElement.query(By.css('input[name="maxCalories"]'));
            const maxCaloriesElement = maxCalories.nativeElement
            maxCaloriesElement.value = 2000
            maxCaloriesElement.dispatchEvent(new Event('input'));
            const isTrackingDisplayed = fixture.debugElement.query(By.css('input[name="isTrackingDisplayed"]'));
            const isTrackingDisplayedElement = isTrackingDisplayed.nativeElement
            isTrackingDisplayedElement.value = true
            isTrackingDisplayedElement.dispatchEvent(new Event('change'));
        })

        describe('Edit my info endpoint', () => {
            let spy;
            beforeEach(() => {
                dataService.updateUserInfo = (id, payload) => Observable.of('ok')
                spy = spyOn(dataService, 'updateUserInfo').and.callFake((id, payload) => Observable.of('ok'))
                fixture.detectChanges();
                fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
            })
            it('should successfully post', () => {
                expect(spy).toHaveBeenCalled();
            })
            it('should call with right arguments', () => {
                expect(spy).toHaveBeenCalledWith('rr', Object({ name: 'YYYY', maxCalories: 2000, isTrackingDisplayed: false }));
            })
        })
    })


})
