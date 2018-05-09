import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { DataService } from 'app/core/services/data.service';
import { Location } from '@angular/common';
import { AuthService } from 'app/core/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'app/shared/models/user.model';
import { UsersComponent } from 'app/users/routes/users-list/users.component';
import { UsersModule } from 'app/users/users.module';
import { AppModule } from 'app/app.module';

describe('Users Component', () => {
    let comp: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;
    let dataService: DataService
    let location: Location
    let authService: AuthService
    let router: Router;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                UsersModule, AppModule
            ],
            providers: [
                { provide: DataService, useValue: {} },
                Location,
            ],
        })
        fixture = TestBed.createComponent(UsersComponent)
        comp = fixture.componentInstance
        dataService = fixture.debugElement.injector.get(DataService)
        location = fixture.debugElement.injector.get(Location)
        authService = fixture.debugElement.injector.get(AuthService)
        authService.isAuthenticated = () => true
        router = TestBed.get(Router);
    })

    describe('Users not retrieved successfully', () => {
        beforeEach(() => {
            dataService.getUsers = () => Observable.throw('E')
            fixture.detectChanges()
        })
        it('name should handle error', () => {
            expect(comp).toBeTruthy()
        })
    })
    describe('Users retrieved successfully', () => {
        beforeEach(() => {
            const users = <User[]>[{ _id: '11', name: 'YYasd', email: 'asddl@kfdl.com', role: 'regular' }]
            const data = { users, count: 111 }
            dataService.getUsers = () => Observable.of(data)
        })
        it('getUsers api method should have been called with the right arguments', () => {
            const spy = spyOn(dataService, 'getUsers').and.callThrough()
            fixture.detectChanges()
            expect(spy).toHaveBeenCalledWith(Object({ roleFilter: undefined, searchTerm: undefined, skip: 0 }))
        })

        describe('Admin authorizations', () => {
            describe('is admin', () => {
                beforeEach(() => {
                    authService.getRole = () => 'admin'
                    fixture.detectChanges()
                })
            })

            describe('is manager', () => {
                beforeEach(() => {
                    authService.getRole = () => 'manager'
                    fixture.detectChanges()
                })

            })

        })

        describe('table', () => {
            beforeEach(() => {
                fixture.detectChanges()
            })
            it('name should get displayed', () => {
                expect(fixture.nativeElement.querySelectorAll('td')[0].innerHTML).toBe('YYasd')
            })
            it('role should get displayed', () => {
                expect(fixture.nativeElement.querySelectorAll('td')[1].innerHTML).toBe('regular')
            })
        })

        describe('Delete user', () => {
            describe('Scenario: Success', () => {
                beforeEach(() => {
                    fixture.detectChanges()
                    dataService.deleteUser = (id) => Observable.of('ok')
                    dataService.getUsers = () => Observable.of({ users: [], count: 40 })
                    fixture.nativeElement.querySelector('#deleteButton').click()
                    fixture.detectChanges()
                })
                it('user row should not be available', () => {
                    expect(fixture.nativeElement.querySelectorAll('td')[0]).toBeFalsy()
                })
            })

            describe('Scenario: Error', () => {
                beforeEach(() => {
                    fixture.detectChanges()
                    dataService.deleteUser = (id) => Observable.throw('E')
                    dataService.getUsers = () => Observable.of({ users: [], count: 40 })
                    fixture.nativeElement.querySelector('#deleteButton').click()
                    fixture.detectChanges()
                })
            })
        })

        describe('Activate user', () => {
            describe('markup before activation', () => {
                it('user should appear unactivated', () => {
                    expect(fixture.nativeElement.querySelector('#activatedIcon')).toBeFalsy()
                })
            })
            describe('Activate user api', () => {
                describe('Scenario: Success', () => {
                    beforeEach(() => {
                        dataService.activateUserAdministratively = (id) => Observable.of('ok')
                        fixture.detectChanges()
                        fixture.nativeElement.querySelector('#activateButton').click()
                        fixture.detectChanges()
                    })
                    it('user should appear activated', () => {
                        expect(fixture.nativeElement.querySelector('#activatedIcon')).toBeTruthy()
                    })
                })

                describe('Scenario: Error', () => {
                    beforeEach(() => {
                        dataService.activateUserAdministratively = (id) => Observable.throw('E')
                        fixture.detectChanges()
                        fixture.nativeElement.querySelector('#activateButton').click()
                        fixture.detectChanges()
                    })
                    it('user should not appear activated', () => {
                        expect(fixture.nativeElement.querySelector('#activatedIcon')).toBeFalsy()
                    })
                })
            })
        })


        describe('Pagination', () => {
            beforeEach(() => {
                fixture.detectChanges()
            })
            describe('Moving to the next page', () => {
                it('getUsers api method should have been called with the right arguments', () => {
                    const spy = spyOn(dataService, 'getUsers').and.callThrough()
                    fixture.nativeElement.querySelectorAll('.page-item a')[11].click()
                    expect(spy).toHaveBeenCalledWith(Object({ roleFilter: undefined , searchTerm: undefined, skip: 10 }))
                })
            })
        })


        describe('Search functionality', () => {
            beforeEach(() => {
                fixture.detectChanges()
                const searchFieldElement = fixture.nativeElement.querySelector('#search_field')
                searchFieldElement.value = 'ss'
                searchFieldElement.dispatchEvent(new Event('input'));
            })

        })




    })
})

