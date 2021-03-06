import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { MealsComponent } from './meals.component';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { AuthService } from 'app/core/services/auth.service';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { SharedModule } from 'app/shared/shared.module';
import { MealsModule } from 'app/shared/meals/meals.module';
import { AppModule } from 'app/app.module';

describe('Meals Component', () => {
    let comp: MealsComponent;
    let fixture: ComponentFixture<MealsComponent>;
    let sb: SnackBarService

    const fakeMeals = [
        {
            name: 'CairoRegular', date: Date(), numOfCalories: 2, id: '12'
        },
        {
            name: 'CairoSummer', date: Date(), numOfCalories: 3, id: '35'
        },
        {
            name: 'AEST', date: Date(), numOfCalories: 2, id: '89'
        },
        {
            name: 'AEDT', date: Date(), numOfCalories: 2, id: '56'
        },
    ]
    const fakeUserDetails = {
        name: 'Y',
        roles: 'regular',
        meals: fakeMeals
    }


    let dataService: DataService

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, AppModule, MealsModule],
            declarations: [],
            providers: [
                SnackBarService,
                AuthService,
                SelectedMealService
            ],
        });
        fixture = TestBed.createComponent(MealsComponent);
        comp = fixture.componentInstance;

        dataService = fixture.debugElement.injector.get(DataService);
        sb = fixture.debugElement.injector.get(SnackBarService);
        dataService.getMeals = () => Observable.of({count: 4, meals: fakeMeals})
        fixture.detectChanges();
    });

    it('should build', () => {
        expect(comp).toBeTruthy()
    })

    describe('initial markup', () => {
        it('name should be displayed', () => {
            expect(fixture.nativeElement.querySelectorAll('#mealsTable td')[0].innerHTML).toBe('CairoRegular')
        })
        it('date should be displayed', () => {
            expect(fixture.nativeElement.querySelectorAll('#mealsTable td')[1].innerHTML).toBeTruthy()
        })
        it('time should be displayed', () => {
            expect(fixture.nativeElement.querySelectorAll('#mealsTable td')[3].innerHTML).toBe('2')
        })
        it('cutlery should be displayed', () => {
            expect(fixture.nativeElement.querySelectorAll('#mealsTable td')[2].innerHTML).toBeTruthy();
            expect(fixture.nativeElement.querySelectorAll('#mealsTable td')[2].innerHTML).toContain(':');
        })
    })


    describe('add click', () => {
        it('add button should be there', () => {
            fixture.nativeElement.querySelector('#addButton').click()
        })
        it('an event should be emitted', () => {
            const spy = spyOn(comp.addClicked, 'emit')
            fixture.nativeElement.querySelector('#addButton').click()
            expect(spy).toHaveBeenCalledTimes(1)
        })
    })

    describe('editting', () => {
        it('edit button should be there', () => {
            expect(fixture.nativeElement.querySelector('#editButton')).toBeTruthy()
        })
        it('an event should be emitted', () => {
            const spy = spyOn(comp.editClicked, 'emit')
            fixture.nativeElement.querySelector('#editButton').click()
            expect(spy).toHaveBeenCalledTimes(1)
        })
    })

    describe('Adding date and time filters', () => {
        beforeEach(() => {
            comp.bsRangeValue = '11/11/2011'
            comp.startTime = Date()
            comp.endTime = Date()
        })
        describe('resetting filters', () => {
            beforeEach(() => {
                fixture.nativeElement.querySelector('#filterOptionsToggle').click()
                fixture.detectChanges()
                fixture.nativeElement.querySelector('#resetFilterButton').click()
            })
            it('date should be erased', () => {
                expect(comp.bsRangeValue).toBeFalsy()
            })
            it('time should be erased', () => {
                expect(comp.startTime).toBeFalsy()
                expect(comp.endTime).toBeFalsy()
            })
        })

        describe('searching utilising filters', () => {
            it('fetching should be called once', () => {
                comp.currentPage = 1
                const spy = spyOn(dataService, 'getMeals').and.callThrough()
                fixture.nativeElement.querySelector('#filterOptionsToggle').click()
                fixture.detectChanges()
                fixture.nativeElement.querySelector('#searchFilterButton').click()
                expect(spy).toHaveBeenCalledTimes(1)
            })
        })

    })


    describe('on Deleteing click', () => {
        it('delete button should be there', () => {
            expect(fixture.nativeElement.querySelector('.fa-trash')).toBeTruthy()
        })


    })




})
