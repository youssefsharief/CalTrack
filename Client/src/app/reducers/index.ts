import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromMeal from '../meal/meal.reducer';
import * as fromRouter from '@ngrx/router-store';

export interface State {

  meal: fromMeal.State;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {

  meal: fromMeal.reducer,
  router: fromRouter.routerReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectedMealState = createFeatureSelector<fromMeal.State>('meal')
export const getSelectedMeal = createSelector(selectedMealState, state => state.meal)
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<any>>('router')
