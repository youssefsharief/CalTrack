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
import { UsersModule } from 'app/users/users.module';
import { EditOtherUserInfoComponent } from 'app/users/routes/edit-other-user-info/edit-other-user-info.component';
import { SelectedUserService } from 'app/users/services/selectedUser.service';

describe('EditOtherUserInfo Component', () => {
    let comp: EditOtherUserInfoComponent;
    let fixture: ComponentFixture<EditOtherUserInfoComponent>;
    let location: Location
    let selectedUserService
    let dataService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UsersModule, RouterTestingModule ],
            providers: [
                { provide: SelectedUserService, useValue: { getUserWithProbableDataFetch(a) { return Observable.of({ _id: 'rr', name: 'aaaa', email: 'aadr@rsde.com' })} } },
                { provide: DataService, useValue: {} },
                SnackBarService,
                AuthService
            ],
        });
        fixture = TestBed.createComponent(EditOtherUserInfoComponent);
        comp = fixture.componentInstance;
        selectedUserService = fixture.debugElement.injector.get(SelectedUserService);
        location = fixture.debugElement.injector.get(Location);
        dataService = fixture.debugElement.injector.get(DataService)
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    describe('submitting form', () => {
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

        describe('edit other user info endpoint', () => {
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
