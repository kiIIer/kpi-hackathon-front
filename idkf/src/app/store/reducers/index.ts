import {isDevMode} from '@angular/core';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
} from '@ngrx/store';
import * as fromTask from '../entities/task/task.reducer';
import * as fromSubject from '../entities/subject/subject.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';


export interface State {
    router: RouterReducerState;
    [fromTask.tasksFeatureKey]: fromTask.TaskState;
    [fromSubject.subjectsFeatureKey]: fromSubject.SubjectState;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
    [fromTask.tasksFeatureKey]: fromTask.reducer,
    [fromSubject.subjectsFeatureKey]: fromSubject.reducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
