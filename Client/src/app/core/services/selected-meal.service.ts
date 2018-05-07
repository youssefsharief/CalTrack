import { Injectable } from '@angular/core';
import { Meal } from 'app/shared/models/meal.model';

@Injectable()
export class SelectedMealService {

    private savedMeal: Meal

    public saveSelectedMeal(meal: Meal): void {
        this.savedMeal = meal;
    }

    public getSelectedMeal(): Meal {
        return this.savedMeal
    }


}
