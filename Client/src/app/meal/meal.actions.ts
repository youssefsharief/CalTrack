import { Action } from '@ngrx/store';
import { Meal } from 'app/shared/models/meal.model';

export enum MealActionTypes {
  SaveMeal = '[UI][Meal] SaveMeal',
  FetchMeal = '[API][Meal] FetchMeal',
  UIGetMeal = '[UI][Meal] GetMeal',
}

export class FetchMeals implements Action {
  readonly type = MealActionTypes.FetchMeal;
  constructor() {}
}

export class UISaveMeal implements Action {
  readonly type = MealActionTypes.SaveMeal;
  constructor(public payload: Meal) {}
}

export class UIGetMeal implements Action {
  readonly type = MealActionTypes.UIGetMeal;
  constructor() {}
}

export type MealActions =
  | MealActionTypes.SaveMeal
  | MealActionTypes.FetchMeal
  | MealActionTypes.UIGetMeal;
