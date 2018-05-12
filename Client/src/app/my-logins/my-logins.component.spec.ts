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
import { AppModule } from 'app/app.module';
import { MyLoginsComponent } from 'app/my-logins/my-logins.component';
import { MyLoginsModule } from 'app/my-logins/my-logins.module';

describe('MyLogins Component', () => {
    let comp: MyLoginsComponent;
    let fixture: ComponentFixture<MyLoginsComponent>;
    let location: Location
    let dataService: DataService
    let authService: AuthService
    const signupPayload = {
        user: {
            _id: 'uID',
            name: 'W',
            email: 'assad@sjdeir.com',
        },
        token: 'bbb'
    }
    const dataServiceStub = {
        connectGoogle() {
            return Observable.of(signupPayload)
        },
        connectFacebook() {
            return Observable.of(signupPayload)
        },
        disconnectLocalLogin() {
            return Observable.of(signupPayload)
        },
        disconnectFacebook() {
            return Observable.of(signupPayload)
        },
        disconnectGoogle() {
            return Observable.of(signupPayload)
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MyLoginsModule, AppModule],
            providers: [
                { provide: DataService, useValue: dataServiceStub },
                Location
            ],
        });
        fixture = TestBed.createComponent(MyLoginsComponent);
        comp = fixture.componentInstance;
        dataService = fixture.debugElement.injector.get(DataService);
        location = fixture.debugElement.injector.get(Location);
        authService = fixture.debugElement.injector.get(AuthService);
    });

    describe('user has only local login with no facebook and google', () => {
        beforeEach(() => {
            authService.getProfile = () => ({
                name: 'aaaaa',
                email: 'aaaaasd@dsl.com',
                isTrackingDisplayed: true,
                maxCalories: 3000
            })
            fixture.detectChanges();
        })
        it('should build successfully', () => {
            expect(comp).toBeTruthy()
        })
        it('should build successfully', () => {
            expect(comp).toBeTruthy()
        })
    })


})
