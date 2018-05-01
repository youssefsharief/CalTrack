import { $ } from 'protractor';

export class MealFormPage {

    static submitForm(name: string, city: string, gmtMealDiference: number) {
        $('input[formControlName=name]').sendKeys(name);
        $('input[formControlName=city]').sendKeys(city);
        $('input[formControlName=gmtMealDifference]').sendKeys(gmtMealDiference);
        $('button[type=submit]').click()
    }

    static clearForm() {
        $('input[formControlName=name]').clear()
        $('input[formControlName=city]').clear()
        $('input[formControlName=gmtMealDifference]').clear()
        $('button[type=submit]').click()
    }
}


