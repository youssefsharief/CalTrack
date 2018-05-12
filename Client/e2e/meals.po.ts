import { $, $$ } from 'protractor';

export class MealsPage {


    static deleteLastElement() {
        $$('tr').last().$$('td').last().click()
    }

    static goToEditLastElement () {
        $$('.fa-edit').last().click()
    }

}


