import {Routes} from '@angular/router';
import {SubjectsPresentationComponent} from './presentation/subjects/subjects.presentation.component';
import {AllTasksContainerComponent} from './container/all-tasks.container/all-tasks.container.component';

export const appRoutes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    // { path: 'login', component: LoginPageComponent },
    {path: 'subjects', component: SubjectsPresentationComponent},
    {path: 'all-tasks', component: AllTasksContainerComponent},
    // { path: 'tasks/:subjectId', component: TasksOfSubjectPageComponent },
];