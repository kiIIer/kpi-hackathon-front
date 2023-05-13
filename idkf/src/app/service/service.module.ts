import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksService} from './tasks/tasks.service';
import {HttpClientModule} from '@angular/common/http';
import {SubjectService} from './subjects/subjects.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class ServiceModule {
}
