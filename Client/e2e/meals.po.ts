import { $, $$ } from 'protractor';

export class MealsPage {

    static columnsInFirstRowInTable = () => $$('#mealsTable tr').get(1).$$('td')
    static mealsTable = () => $('#mealsTable')
    
    // static deleteLastElement() {
    //     return $$('tr').last().$$('td').last().click()
    // }

    static async deleteLastElement() {
        await $$('.fa-trash').last().click()
    }


    static goToEditFirstElement () {
        return $$('.fa-edit').first().click()
    }

}


