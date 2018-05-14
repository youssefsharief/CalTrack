import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { SharedModule } from 'app/shared/shared.module';
import { Location } from '@angular/common';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { OtherUserMealsComponent } from 'app/users/routes/other-user-meals/other-user-meals.component';
import { UsersModule } from 'app/users/users.module';
import { AppModule } from 'app/app.module';
import { Router } from '@angular/router';
import { Meal } from 'app/shared/models/meal.model';
import { User } from 'app/shared/models/user.model';

describe('OtherUserMeal Component', () => {
    let comp: OtherUserMealsComponent;
    let fixture: ComponentFixture<OtherUserMealsComponent>;
    let location: Location
    let dataService: DataService
    let router: Router
    let selectedUserService: SelectedUserService
    const dataServiceStub = {
        getUserDetails() {
            return Observable.of({
                _id: 'uID',
                name: 'W',
                email: 'assad@sjdeir.com',
                meals: [
                    {
                        _id: 'r',
                        date: 'Cairo',
                        name: 'C',
                        numOfCalories: 3
                    }
                ]
            })
        },

        getMeals() {
            return Observable.of('a')
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UsersModule, RouterTestingModule, AppModule],
            providers: [
                { provide: DataService, useValue: dataServiceStub },
                SelectedUserService,
                SnackBarService,
                SelectedMealService,
                Location
            ],
        });
        fixture = TestBed.createComponent(OtherUserMealsComponent);
        comp = fixture.componentInstance;
        dataService = fixture.debugElement.injector.get(DataService);
        location = fixture.debugElement.injector.get(Location);
        router = fixture.debugElement.injector.get(Router);
        selectedUserService = fixture.debugElement.injector.get(SelectedUserService);
        selectedUserService.get = () => <User>{}
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })


    describe('on add clicked', () => {
        it('should call router', () => {
            const spy = spyOn(router, 'navigate')
            comp.onAddClicked()
            expect(spy).toHaveBeenCalledTimes(1)
        });
    })

    describe('on edit clicked', () => {
        it('should call router', () => {
            const spy = spyOn(router, 'navigate')
            comp.onEditClicked(<Meal>{})
            expect(spy).toHaveBeenCalledTimes(1)
        });
    })




})
