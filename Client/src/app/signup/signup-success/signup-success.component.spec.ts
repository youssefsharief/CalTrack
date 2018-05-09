import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SharedModule } from 'app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { SignupSuccessComponent } from 'app/signup/signup-success/signup-success.component';
import { SignupModule } from 'app/signup/signup.module';
import { AppModule } from 'app/app.module';


describe('SignupSuccess Component', () => {

    let comp: SignupSuccessComponent;
    let fixture: ComponentFixture<SignupSuccessComponent>;
    let location: Location


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SignupModule, AppModule],
            providers: [Location],

        });
        fixture = TestBed.createComponent(SignupSuccessComponent);
        comp = fixture.componentInstance;

        location = fixture.debugElement.injector.get(Location);
    });

    it('should build successfully', () => {
        fixture.detectChanges();
        expect(comp).toBeTruthy()
    })




})
