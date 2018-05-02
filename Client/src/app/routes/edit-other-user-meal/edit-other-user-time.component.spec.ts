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
import { EditUserComponent } from 'app/shared/components/users/edit-user/edit-user.component';
import { MyMealComponent } from 'app/routes/personal/my-meal/my-meal.component';
import { UsersComponent } from 'app/routes/users-list/users.component';
import { SelectedUserService } from 'app/core/services/selectedUser.service';
import { PaginationModule } from 'ngx-bootstrap/pagination/pagination.module';
import { OtherUserMealComponent } from 'app/routes/other-user-meal/other-user-meal.component';
import { User } from 'app/shared/models/user.model';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { EditOtherUserMealComponent } from 'app/routes/edit-other-user-meal/edit-other-user-meal.component';

describe('EditOtherUserMeal Component', () => {
    let comp: EditOtherUserMealComponent;
    let fixture: ComponentFixture<EditOtherUserMealComponent>;
    let location: Location
    let dataService: DataService
    let selectedUserService: SelectedUserService
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule, PaginationModule,
                RouterTestingModule.withRoutes([
                    { path: 'users/:id/meal', component: OtherUserMealComponent },
                    { path: 'users', component: UsersComponent }
                ]),
            ],
            declarations: [EditOtherUserMealComponent, UsersComponent, OtherUserMealComponent],
            providers: [
                { provide: SelectedUserService, useValue: {} },
                { provide: DataService, useValue: {} },
                { provide: SelectedMealService, useValue: { getSelectedMeal() { return {_id: 'ww'} } } },
                SnackBarService,
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
        it('should navigate to "users" route', fakeAsync(() => {
            fixture.detectChanges();
            tick()
            expect(location.path()).toBe('/users')
        }))
    })

    describe('user available', () => {
        beforeEach(() => {
            const u = <User> {  _id : 'rr' }
            selectedUserService.getUserWithProbableDataFetch = () => Observable.of(u)
            fixture.detectChanges()
        })
        describe('Submitting Form', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nnnn'
                nameInputElement.dispatchEvent(new Event('input'));
                const date = fixture.debugElement.query(By.css('input[name="date"]'));
                const dateElement = date.nativeElement
                dateElement.value = 'cccc'
                dateElement.dispatchEvent(new Event('input'));
                const calories = fixture.debugElement.query(By.css('input[name="calories"]'));
                const caloriesElement = calories.nativeElement
                caloriesElement.value = '3'
                caloriesElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            describe('Success Scenario', () => {
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
                        expect(spy).toHaveBeenCalledWith('rr', 'ww' , Object({ name: 'nnnn', date: 'cccc', calories: 3 }));
                    })
                })

                it('should navigate to "users/:id/meal" route', fakeAsync(() => {
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    tick(100)
                    expect(location.path()).toBe('/users/rr/meal')
                }))

            })
            describe('Error Scenario', () => {
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
