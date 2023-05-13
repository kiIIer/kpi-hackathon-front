import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskService} from './tasks/tasks.service';
import {HttpClientModule} from '@angular/common/http';
import {SubjectService} from './subjects/subjects.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [TaskService, HttpClientModule, SubjectService],
})
export class ServiceModule {
}
