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

fdescribe('Meals Component', () => {
    let comp: MealsComponent;
    let fixture: ComponentFixture<MealsComponent>;
    let sb: SnackBarService

    const fakemeals = [
        {
            name: 'CairoRegular', date: 'Cairo', calories: 2, id: '12'
        },
        {
            name: 'CairoSummer', date: 'Cairo', calories: 3, id: '35'
        },
        {
            name: 'AEST', date: 'Sydney', calories: 2, id: '89'
        },
        {
            name: 'AEDT', date: 'Sydney', calories: 2, id: '56'
        },
    ]
    const fakeUserDetails = {
        name: 'Y',
        roles: 'regular',
        meals: fakemeals
    }
    const dataServiceStub = {
        deleteMeal(data) {
            return Observable.of('Ok')
        },
        getmeals() {
            return Observable.of(fakemeals)
        },
        getUserDetails() {
            return Observable.of(fakeUserDetails)
        }

    }

    const authServiceStub = {
        getProfile() {
            return {
                _id: '123'
            }
        }

    }


    let dataService: DataService

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule],
            declarations: [],
            providers: [
                { provide: DataService, useValue: dataServiceStub },
                SnackBarService,
                AuthService,
                SelectedMealService
            ],
        });
        fixture = TestBed.createComponent(MealsComponent);
        comp = fixture.componentInstance;

        dataService = fixture.debugElement.injector.get(DataService);
        sb = fixture.debugElement.injector.get(SnackBarService);
        fixture.detectChanges();
    });

    it('should build', () => {
        expect(comp).toBeTruthy()
    })


})
