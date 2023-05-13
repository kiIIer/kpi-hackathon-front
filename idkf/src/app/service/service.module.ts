import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksService} from './tasks/tasks.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [TasksService, HttpClientModule],
})
export class ServiceModule {
}
