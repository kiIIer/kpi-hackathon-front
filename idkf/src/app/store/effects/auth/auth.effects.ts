import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '@auth0/auth0-angular';
import {checkAuth, login, loginComplete, logout, logoutComplete} from '../../entities/auth/auth.actions';
import {combineLatest, of, switchMap, tap} from 'rxjs';

@Injectable()
export class AuthEffects {
    login$ = createEffect(() => this.actions$.pipe(
            ofType(login),
            tap(() => this.authService.loginWithRedirect()),
        ),
        {dispatch: false},
    );

    checkAuth$ = createEffect(() => this.actions$.pipe(
            ofType(checkAuth),
            switchMap(() =>
                combineLatest([
                    this.authService.isAuthenticated$,
                    this.authService.user$,
                    this.authService.getAccessTokenSilently(),
                ]),
            ),
            switchMap(([isAuthenticated, user, token]) => {
                if (isAuthenticated) {
                    return of(loginComplete({user: user!, token: token}));
                }

                return of(logoutComplete());
            }),
        ),
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logout),
            tap(() => this.authService.logout()),
            switchMap(() => of(logoutComplete())),
        ),
    );

    constructor(private actions$: Actions, private authService: AuthService) {
    }
}
