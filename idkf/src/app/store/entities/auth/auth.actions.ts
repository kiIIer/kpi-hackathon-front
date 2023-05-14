import {createAction, props} from '@ngrx/store';
import {User} from '@auth0/auth0-angular';

export const checkAuth = createAction('[Auth] Check Auth');
export const login = createAction('[Auth] Login');
export const loginComplete = createAction(
    '[Auth] loginComplete',
    props<{ user: User | null, token: string }>(),
);

export const logout = createAction('[Auth] Logout');
export const logoutComplete = createAction('[Auth] Logout Complete');