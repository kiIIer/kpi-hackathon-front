import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {goToUrl} from './router.action';
import {tap} from 'rxjs';
import {Router} from '@angular/router';


@Injectable()
export class RouterEffects {

    goto$ = createEffect(
        () => this.actions$.pipe(
            ofType(goToUrl),
            tap((action) => this.router.navigateByUrl(action.url)),
        ),
        {dispatch: false},
    );

    constructor(private readonly actions$: Actions, private router: Router) {
    }
}