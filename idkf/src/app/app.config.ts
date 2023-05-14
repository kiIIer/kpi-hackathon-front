import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {
    provideRouter,
    withEnabledBlockingInitialNavigation,
} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideAuth0} from '@auth0/auth0-angular';
import {HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';
import {provideStoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools';
import {provideStore, StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule, provideEffects} from '@ngrx/effects';
import {AppEffects} from './store/app.effects';
import * as fromTask from './store/entities/task/task.reducer';
import * as fromSubject from './store/entities/subject/subject.reducer';
import {SubjectsEffects} from './store/effects/subjects/subjects.effects';
import {TaskEffects} from './store/effects/task/task.effects';
import {provideRouterStore, routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {RouterEffects} from './store/router/router.effects';

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
        provideStore({
            router: routerReducer,
        }),
        provideRouterStore(),
        importProvidersFrom(
            StoreModule.forRoot(reducers),
            EffectsModule.forRoot([AppEffects]),
            StoreModule.forFeature(fromTask.tasksFeatureKey, fromTask.reducer),
            StoreModule.forFeature(fromSubject.subjectsFeatureKey, fromSubject.reducer),
            EffectsModule.forFeature([SubjectsEffects, TaskEffects, RouterEffects]),
            isDevMode() ? StoreDevtoolsModule.instrument() : [],
        ),
        // provideStoreDevtools(),
    ],
};
