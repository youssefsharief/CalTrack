import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { AuthService } from 'app/core/services/auth.service';
import { Location } from '@angular/common';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { MyMealsComponent } from 'app/my-meals/my-meals.component';
import { MyMealsModule } from 'app/my-meals/my-meals.module';
import { AppModule } from 'app/app.module';

describe('MyMeals Component', () => {
    let comp: MyMealsComponent;
    let fixture: ComponentFixture<MyMealsComponent>;
    let location: Location
    let dataService: DataService

    const dataServiceStub = {
        getUserDetails() {
            return Observable.of({
                _id: 'uID',
                name: 'W',
                email: 'assad@sjdeir.com',
            })
        },
        getMeals() {
            return Observable.of([
                {
                    _id: 'r',
                    date: '13/2/2018',
                    name: 'C',
                    numOfCalories: 3
                }
            ])
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MyMealsModule, AppModule],
            providers: [
                { provide: AuthService, useValue: { getId() { return '1' } } },
                { provide: DataService, useValue: dataServiceStub },
                SnackBarService,
                AuthService,
                SelectedMealService,
                Location
            ],
        });
        fixture = TestBed.createComponent(MyMealsComponent);
        comp = fixture.componentInstance;
        dataService = fixture.debugElement.injector.get(DataService);
        location = fixture.debugElement.injector.get(Location);
        comp.userId = '1'
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })


})
