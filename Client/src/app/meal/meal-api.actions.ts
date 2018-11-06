import { Action } from '@ngrx/store';
import { Meal } from 'app/shared/models/meal.model';

export enum MealsApiActionTypes {
  FetchSuccess = '[Meals/API] Fetch Success',
  FetchFailure = '[Meals/API] Fetch Failure',
}

export class FetchSuccess implements Action {
  readonly type = MealsApiActionTypes.FetchSuccess;
  constructor(public payload: Meal) {}
}

export class FetchFailure implements Action {
  readonly type = MealsApiActionTypes.FetchFailure;
  constructor(public payload: string) {}
}


export type MealsApiActionsUnion = FetchSuccess | FetchFailure;
