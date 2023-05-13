import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromTask from '../entities/task.reducer';


export interface State {

  [fromTask.tasksFeatureKey]: fromTask.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromTask.tasksFeatureKey]: fromTask.reducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
