import {  $ } from 'protractor';

export class LoginPage {

    static async login () {
        await $('input[ng-reflect-name=email]').sendKeys('admin@test.com');
        await $('input[ng-reflect-name=password]').sendKeys('1234567a');
        await $('button[type=submit]').click()
    }
}


