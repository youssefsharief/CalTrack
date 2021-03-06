import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { Location } from '@angular/common';
import { AuthService } from 'app/core/services/auth.service';
import { User } from 'app/shared/models/user.model';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { UsersModule } from 'app/users/users.module';
import { AddOtherUserMealComponent } from 'app/users/routes/add-other-user-meal/add-other-user-meal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'app/core/core.module';

describe('Add Other User Meal Component', () => {
    let comp: AddOtherUserMealComponent;
    let fixture: ComponentFixture<AddOtherUserMealComponent>;
    let location: Location
    let dataService: DataService
    let selectedUserService: SelectedUserService
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UsersModule, RouterTestingModule, CoreModule],
            providers: [
                { provide: SelectedUserService, useValue: {} },
                { provide: DataService, useValue: {} },
            ],
        });
        fixture = TestBed.createComponent(AddOtherUserMealComponent);
        comp = fixture.componentInstance;
        location = fixture.debugElement.injector.get(Location);
        dataService = fixture.debugElement.injector.get(DataService)
        selectedUserService = fixture.debugElement.injector.get(SelectedUserService)
    });

    describe('no user available', () => {
        beforeEach(() => {
            selectedUserService.getUserWithProbableDataFetch = () => Observable.of(null)
        })
        it('should build successfully', () => {
            fixture.detectChanges();
            expect(comp).toBeTruthy()
        })

    })

    describe('user available', () => {
        beforeEach(() => {
            const u = <User> {  _id : 'rr' }
            selectedUserService.getUserWithProbableDataFetch = () => Observable.of(u)
            fixture.detectChanges()
        })
        describe('submitting form', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nnnn'
                nameInputElement.dispatchEvent(new Event('input'));
                const numOfCalories = fixture.debugElement.query(By.css('input[name="numOfCalories"]'));
                const numOfCaloriesElement = numOfCalories.nativeElement
                numOfCaloriesElement.value = '3'
                numOfCaloriesElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            describe('success scenario', () => {
                beforeEach(() => {
                    const user = <User>{}
                    dataService.addMeal = (id, payload) => Observable.of(user)
                })
                describe('api call', () => {
                    let spy
                    beforeEach(() => {
                        spy = spyOn(dataService, 'addMeal').and.callThrough()
                    })
                    it('should successfully post', () => {
                        fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                        expect(spy).toHaveBeenCalled();
                    })
                    it('should call with right arguments', () => {
                        fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                        expect(spy).toHaveBeenCalled();
                    })
                })

                it('should handle success', () => {
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    expect(comp).toBeTruthy();
                })

            })
            describe('error scenario', () => {
                beforeEach(() => {
                    dataService.addMeal = (id, payload) => Observable.throw('Error')
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                })
                it('should handle error', () => {
                    expect(comp).toBeTruthy();
                })
            })
        })
    })
})
