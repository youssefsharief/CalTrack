import { browser, $$, $, } from 'protractor';
import { MealFormPage } from './meal-form.po'
import { LoginPage } from './login.po';
import { Layout } from './layout.po';
import { MealsPage } from './meals.po';
import { CommonPage } from './common.po';

describe('Meal', () => {
    beforeAll(() => {
        browser.get('/login');
        LoginPage.login()
    });

    describe('Meal', () => {
        beforeEach(() => {
            Layout.myMealsTab().click()
        })
        it('should add', () => {
            CommonPage.plusIcon().click()
            MealFormPage.submitForm('NN', 'CN', 5)
            browser.sleep(500)
            const t = CommonPage.lastRowCloumns().first().getText()
            expect(t).toBe('NN')
        })

        it('should update', () => {
            MealsPage.goToEditLastElement()
            const randomName: string = Math.random().toString(36).substring(7)
            MealFormPage.clearForm()
            MealFormPage.submitForm(randomName, 'CF', 3)
            browser.sleep(50)
            Layout.myMealsTab().click()
            browser.sleep(500)
            const afterEditText = CommonPage.lastRowCloumns().first().getText()
            expect(afterEditText).toBe(randomName)
        })

        it('should delete', () => {
            const beforeDeleteText = CommonPage.lastRowCloumns().first().getText()
            MealsPage.deleteLastElement()
            browser.sleep(200)
            const afterDeleteText = CommonPage.lastRowCloumns().first().getText()
            expect(beforeDeleteText).not.toBe(afterDeleteText)
        })
    })


})
