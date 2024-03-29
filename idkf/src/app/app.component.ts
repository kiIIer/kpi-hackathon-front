import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MainPageComponent} from './presentation/main-page/main-page.component';
import {MatButtonModule} from '@angular/material/button';
import {TasksService} from './service/tasks/tasks.service';
import {AuthService} from '@auth0/auth0-angular';
import {Store} from '@ngrx/store';
import {subjectsFeature} from './store/entities/subject/subject.reducer';
import {
    createSubject,
    deleteSubject,
    initSubjects,
    SubjectActions,
    updateSubject,
} from './store/entities/subject/subject.actions';
import {
    createTask,
    deleteTask,
    getTasksBySubjectId,
    loadAllTasks,
    updateTask,
} from './store/entities/task/task.actions';
import {MainContainerComponent} from './container/main.container/main.container.component';
import {goToUrl} from './store/router/router.action';
import {TaskEditorContainerComponent} from "./container/task-editor.container/task-editor.container.component";
import {checkAuth, login, logout} from './store/entities/auth/auth.actions';
import {SubjectEditorContainerComponent} from './container/subject-editor.container/subject-editor.container.component';
import {selectUser} from './store/entities/auth/auth.reducer';


@Component({
    standalone: true,
    imports: [RouterModule, MatProgressSpinnerModule, MainPageComponent, MatButtonModule, MainContainerComponent, SubjectEditorContainerComponent, TaskEditorContainerComponent],
    selector: 'idkf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'idkf';

    constructor(public auth: AuthService, private store: Store, private router: Router) {
        this.store.dispatch(checkAuth());
    }
    goto() {
        this.store.dispatch(goToUrl({url: '/subjects/1'}));
    }
}
