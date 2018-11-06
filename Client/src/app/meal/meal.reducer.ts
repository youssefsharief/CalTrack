import { Action } from '@ngrx/store';
import { MealActions, MealActionTypes } from './meal.actions';
import { Meal } from 'app/shared/models/meal.model';

export interface State {
  meal: Meal
}

export const initialState: State = {
  meal: null
};

export function reducer(state = initialState, action: MealActions): State {
  switch (action.type) {

    case MealActionTypes.SaveMeal:
      return {meal: action.payload};


    default:
      return state;
  }
}
