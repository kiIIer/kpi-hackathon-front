import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksService} from './tasks/tasks.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SubjectService} from './subjects/subjects.service';
import {TokenInterceptorService} from './token-interceptor/token-interceptor.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true,
    }],
})
export class ServiceModule {
}
