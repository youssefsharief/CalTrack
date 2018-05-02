import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { MealFormComponent } from 'app/shared/components/meals/meal-form/meal-form.component';
import { SharedModule } from 'app/shared/shared.module';
import { By } from '@angular/platform-browser';

describe('MealFormComponentt', () => {
    let comp: MealFormComponent;
    let fixture: ComponentFixture<MealFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule]
        });
        fixture = TestBed.createComponent(MealFormComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should build successfully', () => {
        expect(comp).toBeTruthy()
    })

    describe('Form validation', () => {
        describe('invalid name', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nn'
                nameInputElement.dispatchEvent(new Event('input'));
                const date = fixture.debugElement.query(By.css('input[name="date"]'));
                const dateElement = date.nativeElement
                dateElement.value = 'cccc'
                dateElement.dispatchEvent(new Event('input'));
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

        describe('invalid date', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nnnn'
                nameInputElement.dispatchEvent(new Event('input'));
                const date = fixture.debugElement.query(By.css('input[name="date"]'));
                const dateElement = date.nativeElement
                dateElement.value = 'cc'
                dateElement.dispatchEvent(new Event('input'));
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

        describe('numOfCalories validation', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nnnn'
                nameInputElement.dispatchEvent(new Event('input'));
                const date = fixture.debugElement.query(By.css('input[name="date"]'));
                const dateElement = date.nativeElement
                dateElement.value = 'cccc'
                dateElement.dispatchEvent(new Event('input'));
            })

            describe('too high', () => {
                beforeEach(() => {
                    const numOfCalories = fixture.debugElement.query(By.css('input[name="numOfCalories"]'));
                    const numOfCaloriesElement = numOfCalories.nativeElement
                    numOfCaloriesElement.value = '15'
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

            describe('too low', () => {
                beforeEach(() => {
                    const numOfCalories = fixture.debugElement.query(By.css('input[name="numOfCalories"]'));
                    const numOfCaloriesElement = numOfCalories.nativeElement
                    numOfCaloriesElement.value = '-13'
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

            describe('just in range', () => {
                beforeEach(() => {
                    const numOfCalories = fixture.debugElement.query(By.css('input[name="numOfCalories"]'));
                    const numOfCaloriesElement = numOfCalories.nativeElement
                    numOfCaloriesElement.value = '-12'
                    numOfCaloriesElement.dispatchEvent(new Event('input'));
                    fixture.detectChanges()
                })
                it('form should be invalid', () => {
                    expect(comp.form.invalid).toBe(false)
                })
                it('submit button should be disabled', () => {
                    expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeFalsy()
                })
            })

        })
    })

})