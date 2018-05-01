import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { MealZoneFormComponent } from 'app/shared/components/meals/meal-form/meal-form.component';
import { SharedModule } from 'app/shared/shared.module';
import { By } from '@angular/platform-browser';

describe('MealZoneFormComponentt', () => {
    let comp: MealZoneFormComponent;
    let fixture: ComponentFixture<MealZoneFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule]
        });
        fixture = TestBed.createComponent(MealZoneFormComponent);
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
                const city = fixture.debugElement.query(By.css('input[name="city"]'));
                const cityElement = city.nativeElement
                cityElement.value = 'cccc'
                cityElement.dispatchEvent(new Event('input'));
                const gmtMealDifference = fixture.debugElement.query(By.css('input[name="gmtMealDifference"]'));
                const gmtMealDifferenceElement = gmtMealDifference.nativeElement
                gmtMealDifferenceElement.value = '3'
                gmtMealDifferenceElement.dispatchEvent(new Event('input'));
                fixture.detectChanges()
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })

        describe('invalid city', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nnnn'
                nameInputElement.dispatchEvent(new Event('input'));
                const city = fixture.debugElement.query(By.css('input[name="city"]'));
                const cityElement = city.nativeElement
                cityElement.value = 'cc'
                cityElement.dispatchEvent(new Event('input'));
                const gmtMealDifference = fixture.debugElement.query(By.css('input[name="gmtMealDifference"]'));
                const gmtMealDifferenceElement = gmtMealDifference.nativeElement
                gmtMealDifferenceElement.value = '3'
                gmtMealDifferenceElement.dispatchEvent(new Event('input'));
                fixture.detectChanges()
            })
            it('form should be invalid', () => {
                expect(comp.form.invalid).toBe(true)
            })
            it('submit button should be disabled', () => {
                expect(fixture.nativeElement.querySelector('button[type="submit"][disabled]')).toBeTruthy()
            })
        })

        describe('gmtMealDifference validation', () => {
            beforeEach(() => {
                const nameInput = fixture.debugElement.query(By.css('input[name="name"]'));
                const nameInputElement = nameInput.nativeElement
                nameInputElement.value = 'nnnn'
                nameInputElement.dispatchEvent(new Event('input'));
                const city = fixture.debugElement.query(By.css('input[name="city"]'));
                const cityElement = city.nativeElement
                cityElement.value = 'cccc'
                cityElement.dispatchEvent(new Event('input'));
            })

            describe('too high', () => {
                beforeEach(() => {
                    const gmtMealDifference = fixture.debugElement.query(By.css('input[name="gmtMealDifference"]'));
                    const gmtMealDifferenceElement = gmtMealDifference.nativeElement
                    gmtMealDifferenceElement.value = '15'
                    gmtMealDifferenceElement.dispatchEvent(new Event('input'));
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
                    const gmtMealDifference = fixture.debugElement.query(By.css('input[name="gmtMealDifference"]'));
                    const gmtMealDifferenceElement = gmtMealDifference.nativeElement
                    gmtMealDifferenceElement.value = '-13'
                    gmtMealDifferenceElement.dispatchEvent(new Event('input'));
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
                    const gmtMealDifference = fixture.debugElement.query(By.css('input[name="gmtMealDifference"]'));
                    const gmtMealDifferenceElement = gmtMealDifference.nativeElement
                    gmtMealDifferenceElement.value = '-12'
                    gmtMealDifferenceElement.dispatchEvent(new Event('input'));
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
