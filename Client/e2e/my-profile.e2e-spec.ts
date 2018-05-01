import { browser, $$, $, } from 'protractor';
import { LoginPage } from './login.po';
import { Layout } from './layout.po';
import { InfoFormPage } from './info-form.po';
import { MealsPage } from './meals.po';

describe('My Profile', () => {

    beforeAll(() => {
        browser.get('/login');
        LoginPage.login()
    });

    describe('Profile', () => {
        beforeEach(() => {
            Layout.myProfileTab().click()
        })

        it('should update', () => {
            InfoFormPage.clearFormName()
            const randomName: string = Math.random().toString(36).substring(7)
            InfoFormPage.submitForm(randomName)
            Layout.myMealsTab().click()
            Layout.myProfileTab().click()
            expect(InfoFormPage.nameValue()).toBe(randomName)
            Layout.myMealsTab().click()
        })

    })


})
