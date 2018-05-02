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
import { OtherUserMealComponent } from 'app/routes/other-user-meal/other-user-meal.component';
import { EditOtherUserMealComponent } from 'app/routes/edit-other-user-meal/edit-other-user-meal.component';
import { AddOtherUserMealComponent } from 'app/routes/add-other-user-meal/add-other-user-meal.component';
import { SelectedUserService } from 'app/core/services/selectedUser.service';

describe('OtherUserMeal Component', () => {
    let comp: OtherUserMealComponent;
    let fixture: ComponentFixture<OtherUserMealComponent>;
    let location: Location
    let dataService: DataService

    const dataServiceStub = {
        getUserDetails() {
            return Observable.of({
                _id: 'uID',
                name: 'W',
                email: 'assad@sjdeir.com',
                meals: [
                    {
                        _id: 'r',
                        city: 'Cairo',
                        name: 'C',
                        gmtMealDifference: 3
                    }
                ]
            })
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    { path: 'users/:id/meal/edit', component: EditOtherUserMealComponent },
                    { path: 'users/:id/meal/add', component: AddOtherUserMealComponent },
                ]),
                SharedModule
            ],
            declarations: [OtherUserMealComponent, AddOtherUserMealComponent, EditOtherUserMealComponent],
            providers: [
                { provide: DataService, useValue: dataServiceStub },
                SelectedUserService,
                SnackBarService,
                SelectedMealService,
                Location
            ],
        });
        fixture = TestBed.createComponent(OtherUserMealComponent);
        comp = fixture.componentInstance;
        dataService = fixture.debugElement.injector.get(DataService);
        location = fixture.debugElement.injector.get(Location);
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    describe('Initial Markup', () => {
        it('Name should be displayed', () => {
            expect(fixture.nativeElement.querySelectorAll('td')[0].innerHTML).toBe('C')
        })
        it('City should be displayed', () => {
            expect(fixture.nativeElement.querySelectorAll('td')[1].innerHTML).toBe('Cairo')
        })
        it('Gmt meal difference should be displayed', () => {
            expect(fixture.nativeElement.querySelectorAll('td')[3].innerHTML).toBe('3')
        })
        it('clock should be displayed', () => {
            expect(fixture.nativeElement.querySelectorAll('td')[2].innerHTML).toBeTruthy();
            expect(fixture.nativeElement.querySelectorAll('td')[2].innerHTML).toContain(':');
        })
    })

    describe('Delete meal', () => {
        describe('success', () => {
            it('list item should be removed', () => {
                expect(fixture.nativeElement.querySelectorAll('td')[3]).toBeTruthy()
                dataService.deleteMeal = () => Observable.of('ok')
                fixture.nativeElement.querySelector('.fa-trash').click()
                fixture.detectChanges()
                expect(fixture.nativeElement.querySelectorAll('td')[3]).toBeFalsy()
            });
            it('api service should have been called with correct params', () => {
                dataService.deleteMeal = () => Observable.of('ok')
                const spy = spyOn(dataService, 'deleteMeal').and.callThrough()
                fixture.nativeElement.querySelector('.fa-trash').click()
                fixture.detectChanges()
                expect(spy).toHaveBeenCalledWith('uID', 'r')
            });
        })

        describe('error', () => {
            it('list item should not be removed', () => {
                expect(fixture.nativeElement.querySelectorAll('td')[3]).toBeTruthy()
                dataService.deleteMeal = () => Observable.throw('Error')
                fixture.nativeElement.querySelector('.fa-trash').click()
                fixture.detectChanges()
                expect(fixture.nativeElement.querySelectorAll('td')[3]).toBeTruthy()
            });
        })
    })

    describe('Navigation', () => {
        describe('click on plus button', () => {
            it('should navigate to correct add new meal route', fakeAsync(() => {
                fixture.nativeElement.querySelector('.fa-plus').click();
                tick();
                fixture.detectChanges();
                expect(location.path()).toBe('/users/uID/meal/add');
            }));
        })
        describe('click on plus edit button', () => {
            it('should navigate to correct edit meal route', fakeAsync(() => {
                fixture.nativeElement.querySelector('.fa-edit').click();
                tick();
                fixture.detectChanges();
                expect(location.path()).toBe('/users/uID/meal/edit');
            }));
        })
    })


})