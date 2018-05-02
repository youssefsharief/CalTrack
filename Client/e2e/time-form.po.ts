import { $ } from 'protractor';

export class MealFormPage {

    static submitForm(name: string, date: string, gmtMealDiference: number) {
        $('input[formControlName=name]').sendKeys(name);
        $('input[formControlName=date]').sendKeys(date);
        $('input[formControlName=calories]').sendKeys(gmtMealDiference);
        $('button[type=submit]').click()
    }

    static clearForm() {
        $('input[formControlName=name]').clear()
        $('input[formControlName=date]').clear()
        $('input[formControlName=calories]').clear()
        $('button[type=submit]').click()
    }
}


