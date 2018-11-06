import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { asyncScheduler, EMPTY as empty, Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import { MealActions, UIGetMeal, MealActionTypes } from './meal.actions';
import { FetchSuccess, FetchFailure } from './meal-api.actions';
import { Meal } from 'app/shared/models/meal.model';
import { DataService } from 'app/core/services/data.service';
import * as fromRoot from '../reducers/';


@Injectable()
export class MealEffects {
  @Effect()
  getMeal$ = (): Observable<Action> =>
    this.actions$.pipe(
      ofType<UIGetMeal>(MealActionTypes.UIGetMeal),
      withLatestFrom(
        this.store.select(fromRoot.getRouterState),
        (action, router) => {
          console.log('action', action)
          console.log('router', router)
          return {
            userId: 'asd',
            mealId: 'ewo'
          }
        }
      ),
      switchMap(newPayload => {
        if (this.store.select(fromRoot.getSelectedMeal))
        const nextSearch$ = this.actions$.pipe(
          ofType(FindBookPageActions.FindBookPageActionTypes.SearchBooks),
          skip(1)
        );

        return this.dataService.getMeal('q', 'q').pipe(
          takeUntil(nextSearch$),
          map((meal: Meal) => new FetchSuccess(meal)),
          catchError(err => of(new FetchFailure(err)))
        );
      })
    );

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<fromRoot.State>
  ) { }
}
