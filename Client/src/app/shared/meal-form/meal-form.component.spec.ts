import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { MealFormComponent } from 'app/shared/components/meals/meal-form/meal-form.component';
import { SharedModule } from 'app/shared/shared.module';
import { By } from '@angular/platform-browser';
import { CoreModule } from 'app/core/core.module';

describe('MealFormComponentt', () => {
    let comp: MealFormComponent;
    let fixture: ComponentFixture<MealFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, CoreModule]
        });
        fixture = TestBed.createComponent(MealFormComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    // xdescribe('transform date', () => {
    //     it('should work', () => {
    //         expect(comp.transformDate(new Date('2018-08-09'), new Date('2018-08-23'))).toBe('')
    //     })
    // })

    describe('Form validation', () => {
        describe('all valid', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nnaa'
                nameInputElement.dispatchEvent(new Event('input'));
                const date = fixture.debugElement.query(By.css('input[name="date"]'));
                const dateElement = date.nativeElement
                dateElement.value = '15/05/2018'
                dateElement.dispatchEvent(new Event('input'));
                const hour = fixture.debugElement.queryAll(By.css('.bs-timepicker-field'))[0];
                const hourElement = hour.nativeElement;
                hourElement.value = '13'
                hourElement.dispatchEvent(new Event('input'));
                const minutes = fixture.debugElement.queryAll(By.css('.bs-timepicker-field'))[1];
                const minutesElement = minutes.nativeElement;
                minutesElement.value = '08'
                minutesElement.dispatchEvent(new Event('input'));
                const numOfCalories = fixture.debugElement.query(By.css('input[name="numOfCalories"]'));
                const numOfCaloriesElement = numOfCalories.nativeElement
                numOfCaloriesElement.value = '3'
                numOfCaloriesElement.dispatchEvent(new Event('input'));
                fixture.detectChanges()
            })
            it('form should be valid', () => {
                expect(comp.form.invalid).toBe(false)
            })
            it('submit button should be enabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeFalsy()
            })

            fdescribe('Submitting', () => {
                xit('should call output', () => {
                    const spy = spyOn(comp.submitted, 'emit')
                    fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement.click()
                    fixture.detectChanges()
                    expect(spy).toHaveBeenCalledWith(2)
                })

            })
        })


        describe('invalid name', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'aa'
                nameInputElement.dispatchEvent(new Event('input'));
                const date = fixture.debugElement.query(By.css('input[name="date"]'));
                const dateElement = date.nativeElement
                dateElement.value = '15/05/2018'
                dateElement.dispatchEvent(new Event('input'));
                const hour = fixture.debugElement.queryAll(By.css('.bs-timepicker-field'))[0];
                const hourElement = hour.nativeElement;
                hourElement.value = '13'
                hourElement.dispatchEvent(new Event('input'));
                const minutes = fixture.debugElement.queryAll(By.css('.bs-timepicker-field'))[1];
                const minutesElement = minutes.nativeElement;
                minutesElement.value = '08'
                minutesElement.dispatchEvent(new Event('input'));
                const numOfCalories = fixture.debugElement.query(By.css('input[name="numOfCalories"]'));
                const numOfCaloriesElement = numOfCalories.nativeElement
                numOfCaloriesElement.value = '3'
                numOfCaloriesElement.dispatchEvent(new Event('input'));
                fixture.detectChanges()
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })
    })

})
