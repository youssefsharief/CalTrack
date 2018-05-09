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
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { MyMealsComponent } from 'app/my-meals/my-meals.component';
import { MyMealsModule } from 'app/my-meals/my-meals.module';
import { EditMyMealComponent } from 'app/my-meals/edit-my-meal/edit-my-meal.component';
import { CoreModule } from 'app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('EditMyMeal Component', () => {
    let comp: EditMyMealComponent;
    let fixture: ComponentFixture<EditMyMealComponent>;
    let location: Location
    let authService: AuthService
    let mealsService: SelectedMealService
    let dataService: DataService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MyMealsModule, RouterTestingModule.withRoutes([
                { path: 'my-meals', component: MyMealsComponent }
            ]), CoreModule, BrowserAnimationsModule],
            providers: [
                { provide: AuthService, useValue: { getId() { return 'iiid' } } },
                { provide: DataService, useValue: {} },
                { provide: SelectedMealService, useValue: { getSelectedMeal() { return { _id: 'ww', name: 'rrrrrr', date: Date() } } } },

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
    describe('No meal has been selected', () => {
        it('should navigate to "my-meals" route', () => {
            mealsService.getSelectedMeal = () => null
            fixture.detectChanges();
            tick(100)
            expect(location.path()).toBe('/my-meals')
        })
    })

    describe('Meal has been selected', () => {
        beforeEach(() => {
            mealsService.getSelectedMeal = () => ({ _id: 'rr', name: 'tttttt', date: 'vvvvvvv', numOfCalories: 9 })
            fixture.detectChanges();
        })
        it('should build successfully', () => {
            expect(comp).toBeTruthy()
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
                    })
                    it('should successfully post', () => {
                        comp.onSubmitted({ name: 'aaaa', date: 'vvvvvvv', numOfCalories: 999 })
                        expect(spy).toHaveBeenCalled();
                    })
                })
                xit('should navigate to "my-meals" route', () => {
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    tick(100)
                    expect(location.path()).toBe('/my-meals')
                })
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
