import { browser, $$, $ , ExpectedConditions as EC} from 'protractor';
import { MealFormPage } from './meal-form.po'
import { LoginPage } from './login.po';
import { Layout } from './layout.po';
import { MealsPage } from './meals.po';
import { CommonPage } from './common.po';
import * as faker from 'faker'
describe('Meal', () => {
    beforeAll(async() => {
        await browser.get('/login');
        await LoginPage.login()
    });

    describe('Meal', () => {
        beforeEach(async () => {
            await Layout.myRecordsTab().click()
        })

        it('should add', async () => {
            await CommonPage.plusIcon().click()
            const mealName = faker.random.alphaNumeric(5)
            await MealFormPage.submitForm(mealName, '05/12/2018', 400 )
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
            // const beforeDeleteText = await CommonPage.lastRowCloumns().first().getText()
            const countOld = await CommonPage.columns().count()
            await MealsPage.deleteLastElement()
            await browser.sleep(100)
            const countNew = await CommonPage.columns().count()
            expect(countOld).not.toBe(countNew)
        })
    })


})
