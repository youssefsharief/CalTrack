import { browser, $$, $, ExpectedConditions as EC } from 'protractor';
import { MealFormPage } from './meal-form.po'
import { LoginPage } from './login.po';
import { Layout } from './layout.po';
import { MealsPage } from './meals.po';
import { CommonPage } from './common.po';
import * as faker from 'faker'
import { InfoFormPage } from './info-form.po';
import { UsersPage } from './users.po';


describe('Specs', () => {
    beforeAll(async () => {
        await browser.driver.manage().window().maximize();
        await browser.get('/login');
        await LoginPage.login()
    });
    describe('Info', () => {
        describe('My profile', () => {
            beforeEach(async () => {
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
    describe('Meal', () => {
        beforeEach(async () => {
            await Layout.myRecordsTab().click()
        })
        it('should add', async () => {
            await CommonPage.plusIcon().click()
            const mealName = faker.random.alphaNumeric(5)
            await MealFormPage.submitForm(mealName, '05/12/2018', 400)
            // browser.wait(EC.visibilityOf(await MealsPage.mealsTable()), 10000);
            await browser.sleep(1000)
            const t = await MealsPage.columnsInFirstRowInTable().first().getText()
            expect(t).toBe(mealName)
        })
        it('should update', async () => {
            await MealsPage.goToEditFirstElement()
            const randomName: string = Math.random().toString(36).substring(7)
            await MealFormPage.clearForm()
            await MealFormPage.submitForm(randomName, '05/12/2018', 300)
            await browser.sleep(50)
            await Layout.myRecordsTab().click()
            await browser.sleep(500)
            const afterEditText = await MealsPage.columnsInFirstRowInTable().first().getText()
            expect(afterEditText).toBe(randomName)
        })
        it('should delete', async () => {
            const countOld = await CommonPage.columns().count()
            await MealsPage.deleteLastElement()
            await browser.sleep(100)
            const countNew = await CommonPage.columns().count()
            expect(countOld).not.toBe(countNew)
        })
    })


})
