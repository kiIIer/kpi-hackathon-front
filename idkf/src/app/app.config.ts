import {ApplicationConfig} from '@angular/core';
import {
    provideRouter,
    withEnabledBlockingInitialNavigation,
} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideAuth0} from '@auth0/auth0-angular';
import {HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
        provideAnimations(),
        provideAuth0({
            domain: 'kpi-hackathon-idkbf.eu.auth0.com',
            clientId: 'SI0976mxfvMqgIKE0lkCHZUeGV53rd6f',
            authorizationParams: {
                audience: 'http://localhost:7097/',
                redirect_uri: window.location.origin,
            },
        }),
        provideHttpClient(),
    ],
};
