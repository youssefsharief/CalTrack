import { $ } from 'protractor';

export class MealFormPage {

    static async submitForm(name: string, date: string, calories: number) {
        await $('input[formControlName=name]').sendKeys(name);
        await $('input[formControlName=date]').sendKeys(date);
        await $('input[formControlName=numOfCalories]').sendKeys(calories);
        await $('button[type=submit]').click()
    }

    static async clearForm() {
        await $('input[formControlName=name]').clear()
        await $('input[formControlName=numOfCalories]').clear()
    }
}


