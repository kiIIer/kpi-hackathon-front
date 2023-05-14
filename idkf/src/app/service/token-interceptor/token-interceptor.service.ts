import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '@auth0/auth0-angular';
import {catchError, from, mergeMap, Observable, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.authService.getAccessTokenSilently()).pipe(
            mergeMap(token => {
                if (token) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }
                return next.handle(request);
            }),
            catchError(err => {
                if (err.status === 401) {
                    this.authService.logout();
                }
                const error = err.error.message || err.statusText;
                return throwError(error);
            }),
        );
    }
}