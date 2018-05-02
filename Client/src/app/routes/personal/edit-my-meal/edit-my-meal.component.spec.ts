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
import { EditMyMealComponent } from 'app/routes/personal/edit-my-meal/edit-my-meal.component';
import { SelectedMealService } from 'app/core/services/selected-meal.service';


describe('EditMyMeal Component', () => {
    let comp: EditMyMealComponent;
    let fixture: ComponentFixture<EditMyMealComponent>;
    let location: Location
    let authService: AuthService
    let mealsService: SelectedMealService
    let dataService: DataService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule,
                RouterTestingModule.withRoutes([
                    { path: 'my-meal', component: MyMealComponent }
                ]),
            ],
            declarations: [EditMyMealComponent, MyMealComponent],
            providers: [
                { provide: AuthService, useValue: { getId() { return 'iiid' } } },
                { provide: DataService, useValue: {} },
                { provide: SelectedMealService, useValue: {} },
                SnackBarService,

            ],
        });
        fixture = TestBed.createComponent(EditMyMealComponent);
        comp = fixture.componentInstance;
        authService = fixture.debugElement.injector.get(AuthService);
        location = fixture.debugElement.injector.get(Location);
        dataService = fixture.debugElement.injector.get(DataService)
        mealsService = fixture.debugElement.injector.get(SelectedMealService)
    });
    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })
    describe('No timing has been selected', () => {
        it('should navigate to "my-meal" route', fakeAsync(() => {
            mealsService.getSelectedMeal = () => null
            fixture.detectChanges();
            tick(100)
            expect(location.path()).toBe('/my-meal')
        }))
    })

    describe('Meal has been selected', () => {
        beforeEach(() => {
            mealsService.getSelectedMeal = () => ({ _id: 'rr', name: 'tttttt', date: 'vvvvvvv', numOfCalories: 9 })
            fixture.detectChanges();
        })
        it('should build successfully', () => {
            expect(comp).toBeTruthy()
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
                fixture.detectChanges()
            })

            describe('Add my meal endpoint', () => {
                describe('Success Scenario', () => {
                    beforeEach(() => {
                        dataService.updateMeal = (id, payload) => Observable.of('ok')
                    })
                    describe('api call', () => {
                        let spy;
                        beforeEach(() => {
                            spy = spyOn(dataService, 'updateMeal').and.callThrough()
                            fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                        })
                        it('should successfully post', () => {
                            expect(spy).toHaveBeenCalled();
                        })
                        it('should call with right arguments', () => {
                            expect(spy).toHaveBeenCalledWith('iiid', 'rr', Object({ name: 'nnnn', date: 'cccc', numOfCalories: 3 }));
                        })
                    })
                    it('should navigate to "my-meal" route', fakeAsync(() => {
                        fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                        tick(100)
                        expect(location.path()).toBe('/my-meal')
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
})
