import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {filter, Observable, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectUser} from '../store/entities/auth/auth.reducer';
import {login} from '../store/entities/auth/auth.actions';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {
    }

    canActivate(): Observable<boolean> {
        return this.checkUser();
    }

    checkUser(): Observable<boolean> {
        return this.authService.user$.pipe(
            tap((user) => {
                if (!user) {
                    this.authService.loginWithRedirect();
                }
            }),
            filter((user) => !!user),
            map(() => true),
        );
    }
}