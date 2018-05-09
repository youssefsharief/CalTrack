import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { EditRoleComponent } from './edit-role.component';
import { SharedModule } from 'app/shared/shared.module';
import { PaginationModule } from 'ngx-bootstrap/pagination/pagination.module';
import { Location } from '@angular/common';
import { DataService } from 'app/core/services/data.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { UsersModule } from 'app/users/users.module';
import { SelectedUserService } from 'app/users/services/selectedUser.service';
import { AppModule } from 'app/app.module';

describe('EditRoleComponent', () => {
    let comp: EditRoleComponent;
    let fixture: ComponentFixture<EditRoleComponent>;
    let sb: SnackBarService
    let dataService: DataService
    let location: Location

    const dataServiceStub = {
        assignRole(data) {
            return Observable.of('Ok')
        }
    }
    const SelectedDataServiceStub = {
        getUserWithProbableDataFetch() {
            return Observable.of({ _id: '123', name: 'Essam' })
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UsersModule, AppModule, RouterTestingModule],
            providers: [
                { provide: DataService, useValue: dataServiceStub },
                SnackBarService,
                { provide: SelectedUserService, useValue: SelectedDataServiceStub },
                Location
            ],
        });
        fixture = TestBed.createComponent(EditRoleComponent);
        comp = fixture.componentInstance;
        dataService = fixture.debugElement.injector.get(DataService);
        sb = fixture.debugElement.injector.get(SnackBarService);
        location = fixture.debugElement.injector.get(Location);
        fixture.detectChanges()
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    describe('Roles available', () => {
        it('should call dataservice wtih regular role', () => {
            const spy = spyOn(dataService, 'assignRole').and.callThrough()
            const select = fixture.nativeElement.querySelector('select')
            select.value = 'regular'
            select.dispatchEvent(new Event('change'));
            fixture.nativeElement.querySelector('button').click()
            expect(spy).toHaveBeenCalledWith('123', { role: 'regular' })
        })

        it('should call dataservice wtih manager role', () => {
            const spy = spyOn(dataService, 'assignRole').and.callThrough()
            const select = fixture.nativeElement.querySelector('select')
            select.value = 'manager'
            select.dispatchEvent(new Event('change'));
            fixture.nativeElement.querySelector('button').click()
            expect(spy).toHaveBeenCalledWith('123', { role: 'manager' })
        })

        it('should call dataservice wtih admin role', () => {
            const spy = spyOn(dataService, 'assignRole').and.callThrough()
            const select = fixture.nativeElement.querySelector('select')
            select.value = 'admin'
            select.dispatchEvent(new Event('change'));
            fixture.nativeElement.querySelector('button').click()
            expect(spy).toHaveBeenCalledWith('123', { role: 'admin' })
        })

        it('should not call dataservice wtih unknown role', () => {
            const spy = spyOn(dataService, 'assignRole').and.callThrough()
            const select = fixture.nativeElement.querySelector('select')
            select.value = 'oo'
            select.dispatchEvent(new Event('change'));
            fixture.nativeElement.querySelector('button').click()
            expect(spy).not.toHaveBeenCalledWith('123', { role: 'oo' })
        })
    })


    describe('Navigation', () => {
        beforeEach(() => {
            const select = fixture.nativeElement.querySelector('select')
            select.value = 'regular'
            select.dispatchEvent(new Event('change'));
        })
        it('should handle success', () => {
            fixture.nativeElement.querySelector('button').click()
            expect(comp).toBeTruthy()
        })
    })

    describe('Error scenario', () => {
        it('should handle error', () => {
            dataService.assignRole = () => Observable.throw('Error')
            const select = fixture.nativeElement.querySelector('select')
            select.value = 'regular'
            select.dispatchEvent(new Event('change'));
            fixture.nativeElement.querySelector('button').click();
            expect(comp).toBeTruthy()
        })
    })


})
