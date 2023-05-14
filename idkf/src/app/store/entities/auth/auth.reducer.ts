import {EntityState} from '@ngrx/entity';
import {Subject} from '../subject/subject.model';
import {User} from '@auth0/auth0-angular';
import {createFeature, createReducer, on} from '@ngrx/store';
import {loginComplete, logoutComplete} from './auth.actions';
import {adapter, reducer, subjectsFeatureKey} from '../subject/subject.reducer';

export const authFeatureKey = 'auth';

export interface AppAuthState {
    user: User | null,
    token: string | null
}

export const initialState: AppAuthState = {
    user: null,
    token: null,
};

export const authReducer = createReducer(
    initialState,
    on(
        loginComplete,
        (state: AppAuthState, {user, token}) => ({...state, user: user, token: token}),
    ),
    on(
        logoutComplete,
        (state: AppAuthState) => ({...state, user: null, token: null}),
    ),
);

export const authFeature = createFeature({
    name: authFeatureKey,
    reducer,
});