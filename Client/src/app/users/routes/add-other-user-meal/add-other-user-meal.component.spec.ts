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
import { PaginationModule } from 'ngx-bootstrap/pagination/pagination.module';
import { User } from 'app/shared/models/user.model';
import { SelectedUserService } from 'app/users/services/selectedUser.service';

describe('AddOtherUserMeal Component', () => {
    let comp: AddOtherUserMealComponent;
    let fixture: ComponentFixture<AddOtherUserMealComponent>;
    let location: Location
    let dataService: DataService
    let selectedUserService: SelectedUserService
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule, PaginationModule,
                RouterTestingModule.withRoutes([
                    { path: 'users/:id/meal', component: OtherUserMealsComponent },
                    { path: 'users', component: UsersComponent }
                ]),
            ],
            declarations: [AddOtherUserMealComponent, UsersComponent, OtherUserMealsComponent],
            providers: [
                { provide: SelectedUserService, useValue: {} },
                { provide: DataService, useValue: {} },
                SnackBarService,
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
                const numOfCalories = fixture.debugElement.query(By.css('input[name="numOfCalories"]'));
                const numOfCaloriesElement = numOfCalories.nativeElement
                numOfCaloriesElement.value = '3'
                numOfCaloriesElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
            })
            describe('Success Scenario', () => {
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
                        expect(spy).toHaveBeenCalledWith('rr', Object({ name: 'nnnn', date: 'cccc', numOfCalories: 3 }));
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
