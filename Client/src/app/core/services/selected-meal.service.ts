import { Injectable } from '@angular/core';
import { Meal } from 'app/shared/models/meal.model';

@Injectable()
export class SelectedMealService {

    private savedMeal: Meal

    public saveSelectedMeal(timing: Meal): void {
        this.savedMeal = timing;
    }

    public getSelectedMeal(): Meal {
        return this.savedMeal
    }


}
