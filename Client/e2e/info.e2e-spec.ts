import { browser, $$, $, } from 'protractor';
import { LoginPage } from './login.po';
import { Layout } from './layout.po';
import { InfoFormPage } from './info-form.po';
import { MealsPage } from './meals.po';
import { CommonPage } from './common.po';
import { UsersPage } from './users.po';

fdescribe('Info', () => {

    beforeAll(async () => {
        await browser.get('/login');
        await LoginPage.login()
    });

    describe('My profile', () => {
        beforeEach(async() => {
            await Layout.myProfileTab().click()
        })

        it('should update', async () => {
            await InfoFormPage.clearFormName()
            const randomName: string = Math.random().toString(36).substring(7)
            await InfoFormPage.submitForm(randomName)
            await Layout.myRecordsTab().click()
            await Layout.myProfileTab().click()
            expect(await InfoFormPage.nameValue()).toBe(randomName)
            await Layout.myRecordsTab().click()
        })

    })

    describe('Other user profile', () => {
        beforeEach(async () => {
            await Layout.usersTab().click()
        })

        it('should update', async () => {
            const nameOfLastUserBeforeUpdate = await UsersPage.nameOfLastUser()
            await CommonPage.editIcons().last().click()
            await InfoFormPage.clearFormName()
            const randomName: string = Math.random().toString(36).substring(7)
            await InfoFormPage.submitForm(randomName)
            await Layout.usersTab().click()
            const nameOfLastUserAfterUpdate = await UsersPage.nameOfLastUser()
            expect(nameOfLastUserAfterUpdate).toBe(randomName)
            expect(nameOfLastUserAfterUpdate).not.toBe(nameOfLastUserBeforeUpdate)
        })

    })


})
