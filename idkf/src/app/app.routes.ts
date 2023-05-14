import {Routes} from '@angular/router';
import {SubjectsPresentationComponent} from './presentation/subjects/subjects.presentation.component';
import {AllTasksContainerComponent} from './container/all-tasks.container/all-tasks.container.component';
import {SubjectsContainerComponent} from './container/subjects.container/subjects.container.component';
import {SubjectContainerComponent} from './container/subject.container/subject.container.component';

export const appRoutes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    // { path: 'login', component: LoginPageComponent },
    {path: 'subjects', component: SubjectsContainerComponent},
    {path: 'all-tasks', component: AllTasksContainerComponent},
    {path: 'subjects/:subjectId', component: SubjectContainerComponent},
];