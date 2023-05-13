import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MainPageComponent} from './presentation/main-page/main-page.component';
import {MatButtonModule} from '@angular/material/button';
import {TaskService} from './service/tasks/tasks.service';
import {AuthService} from '@auth0/auth0-angular';
import {Store} from '@ngrx/store';
import {subjectsFeature} from './store/entities/subject/subject.reducer';
import {initSubjects, SubjectActions} from './store/entities/subject/subject.actions';

@Component({
    standalone: true,
    imports: [RouterModule, MatProgressSpinnerModule, MainPageComponent, MatButtonModule],
    selector: 'idkf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'idkf';

    constructor(public auth: AuthService, private store: Store) {
    }

    printUserData() {
        this.auth.user$.forEach((u) => console.log(u));
        this.auth.getAccessTokenSilently().forEach((t) => console.log(t));
    }

    testStore() {
        this.store.select(subjectsFeature.selectAll).forEach((a) => console.log(a));
    }

    dispatch() {
        // this.store.dispatch(SubjectActions.addSubject({
        //     subject: {
        //         id: 1,
        //         name: 'Name',
        //         description: 'description',
        //         deadline: '1234',
        //         maxGrade: 10,
        //     },
        // }));
        this.store.dispatch(initSubjects());
    }
}
