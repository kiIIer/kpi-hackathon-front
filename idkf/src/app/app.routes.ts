import {Routes} from '@angular/router';
import {SubjectsComponent} from "./presentation/subjects/subjects.component";

export const appRoutes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    // { path: 'login', component: LoginPageComponent },
    { path: 'subjects', component: SubjectsComponent }
    // { path: 'all-tasks', component: AllTasksPageComponent },
    // { path: 'tasks/:subjectId', component: TasksOfSubjectPageComponent },
];