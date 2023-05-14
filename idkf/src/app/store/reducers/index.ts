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
import * as fromAuth from '../entities/auth/auth.reducer';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';


export interface State {
    router: RouterReducerState;
    [fromTask.tasksFeatureKey]: fromTask.TaskState;
    [fromSubject.subjectsFeatureKey]: fromSubject.SubjectState;
    [fromAuth.authFeatureKey]: fromAuth.AppAuthState;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
    [fromTask.tasksFeatureKey]: fromTask.reducer,
    [fromSubject.subjectsFeatureKey]: fromSubject.reducer,
    [fromAuth.authFeatureKey]: fromAuth.authReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
