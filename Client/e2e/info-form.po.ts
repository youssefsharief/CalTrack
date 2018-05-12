import { $ } from 'protractor';

export class InfoFormPage {

    static nameValue =  () => $('input[ng-reflect-name=name]').getAttribute('value')
    static async submitForm(name: string) {
        await $('input[formControlName=name]').sendKeys(name);
        await $('button[type=submit]').click()
    }

    static async clearFormName() {
        await $('input[name="name"]').clear()
    }
}


