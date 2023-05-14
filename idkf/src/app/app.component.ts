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
import {createTask, deleteTask, loadAllTasks, updateTask} from './store/entities/task/task.actions';
import {goToUrl} from './store/router/router.action';

@Component({
    standalone: true,
    imports: [RouterModule, MatProgressSpinnerModule, MainPageComponent, MatButtonModule],
    selector: 'idkf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'idkf';

    constructor(public auth: AuthService, private store: Store, private router: Router) {
    }

    printUserData() {
        this.auth.user$.forEach((u) => console.log(u));
        this.auth.getAccessTokenSilently().forEach((t) => console.log(t));
    }

    testStore() {
        this.store.select(subjectsFeature.selectAll).forEach((a) => console.log(a));
    }

    dispatch() {
        this.store.dispatch(createTask({
            task: {
                id: 0,
                status: 1,
                subjectId: 0,
                name: 'Do',
                deadline: '0123',
                description: 'stuff',
                maxGrade: 10,
            },
        }));

        this.store.dispatch(updateTask({
            task: {
                id: 3,
                status: 1,
                subjectId: 0,
                name: 'Doing stuffy stuff',
                deadline: '0123',
                description: 'stuff',
                maxGrade: 10,
            },
        }));

        this.store.dispatch(deleteTask({id: 3}))
    }

    goto(){
        this.store.dispatch(goToUrl({url:'/subjects'}))
    }
}
