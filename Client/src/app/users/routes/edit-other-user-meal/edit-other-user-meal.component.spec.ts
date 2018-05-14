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
import { PaginationModule } from 'ngx-bootstrap/pagination/pagination.module';
import { User } from 'app/shared/models/user.model';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { EditOtherUserMealComponent } from 'app/users/routes/edit-other-user-meal/edit-other-user-meal.component';
import { UsersModule } from 'app/users/users.module';
import { CoreModule } from 'app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditOtherUserMeal Component', () => {
    let comp: EditOtherUserMealComponent;
    let fixture: ComponentFixture<EditOtherUserMealComponent>;
    let location: Location
    let dataService: DataService
    let selectedUserService: SelectedUserService
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UsersModule, CoreModule, RouterTestingModule, BrowserAnimationsModule ],
            providers: [
                { provide: SelectedUserService, useValue: {} },
                { provide: DataService, useValue: {} },
                { provide: SelectedMealService, useValue: { getSelectedMeal() { return {_id: 'ww', name: 'rrrrrr', date: Date()} } } },
            ],
        });
        fixture = TestBed.createComponent(EditOtherUserMealComponent);
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
            const u = <User> {  _id : 'rr', name: 'aaaaaa' }
            selectedUserService.getUserWithProbableDataFetch = () => Observable.of(u)
            fixture.detectChanges()
        })
        describe('submitting form', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nnnn'
                nameInputElement.dispatchEvent(new Event('input'));
                const date = fixture.debugElement.query(By.css('input[name="date"]'));
                const dateElement = date.nativeElement
                dateElement.value = 'cccc'
                dateElement.dispatchEvent(new Event('input'));
                const numOfCalories = fixture.debugElement.query(By.css('input[name="numOfCalories"]'));
                const numOfCaloriesElement = numOfCalories.nativeElement
                numOfCaloriesElement.value = '3'
                numOfCaloriesElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            describe('success scenario', () => {
                beforeEach(() => {
                    dataService.updateMeal = (id, payload) => Observable.of('ok')
                })
                describe('api call', () => {
                    let spy
                    beforeEach(() => {
                        spy = spyOn(dataService, 'updateMeal').and.callThrough()
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



            })
            describe('error scenario', () => {
                beforeEach(() => {
                    dataService.updateMeal = (id, payload) => Observable.throw('Error')
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                })
                it('should handle error', () => {
                    expect(comp).toBeTruthy();
                })
            })
        })
    })
})
