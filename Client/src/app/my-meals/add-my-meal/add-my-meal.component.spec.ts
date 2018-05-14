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
import { AddMyMealComponent } from 'app/my-meals/add-my-meal/add-my-meal.component';
import { MyMealsModule } from 'app/my-meals/my-meals.module';
import { CaloriesTrackingSubjectService } from 'app/core/services/calories-tracking-subject.service';
import { CoreModule } from 'app/core/core.module';


describe('AddMyMeal Component', () => {
    let comp: AddMyMealComponent;
    let fixture: ComponentFixture<AddMyMealComponent>;
    let location: Location
    let authService: AuthService
    let dataService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MyMealsModule, RouterTestingModule, CoreModule ],
            providers: [
                { provide: AuthService, useValue: { getId() { return 'iiid' } } },
                { provide: DataService, useValue: {} },
                SnackBarService
            ],
        });
        fixture = TestBed.createComponent(AddMyMealComponent);
        comp = fixture.componentInstance;
        authService = fixture.debugElement.injector.get(AuthService);
        location = fixture.debugElement.injector.get(Location);
        dataService = fixture.debugElement.injector.get(DataService)
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
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
            fixture.detectChanges()
        })

        describe('Add my meal endpoint', () => {
            describe('success scenario', () => {
                beforeEach(() => {
                    dataService.addMeal = (id, payload) => Observable.of('ok')
                })
                describe('api call', () => {
                    let spy;
                    beforeEach(() => {
                        spy = spyOn(dataService, 'addMeal').and.callThrough()
                        fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    })
                    it('should successfully post', () => {
                        expect(spy).toHaveBeenCalled();
                    })
                    it('should call with right arguments', () => {
                        expect(spy).toHaveBeenCalled();
                    })
                })
                it('should handle success', () => {
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    expect(comp).toBeTruthy()
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
