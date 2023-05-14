import {Routes} from '@angular/router';
import {AllTasksContainerComponent} from './container/all-tasks.container/all-tasks.container.component';
import {SubjectsContainerComponent} from './container/subjects.container/subjects.container.component';
import {SubjectContainerComponent} from './container/subject.container/subject.container.component';
import {TaskEditorContainerComponent} from './container/task-editor.container/task-editor.container.component';
import {SubjectEditorContainerComponent} from './container/subject-editor.container/subject-editor.container.component';
import {
    SubjectCreatorContainerComponent,
} from './container/subject-creator.container/subject-creator.container.component';
import {TaskCreatorContainerComponent} from './container/task-creator.container/task-creator.container.component';
import {AuthGuard} from './guards/auth.guard';
import {AllTasksGuard} from './guards/all-tasks.guard';
import {AllSubjectsGuard} from './guards/all-subjects.guard';
import {TasksGuard} from './guards/tasks.guard';
import {SubjectGuard} from './guards/subject.guard';
import {TaskGuard} from './guards/task.guard';

export const appRoutes: Routes = [
    {path: '', redirectTo: '/subjects', pathMatch: 'full'},
    {path: 'tasks', component: AllTasksContainerComponent, canActivate: [AuthGuard, AllTasksGuard]},
    {path: 'subjects', component: SubjectsContainerComponent, canActivate: [AuthGuard]},
    {path: 'subjects/create', component: SubjectCreatorContainerComponent, canActivate: [AuthGuard]},
    {
        path: 'subjects/:subjectId/edit',
        component: SubjectEditorContainerComponent,
        canActivate: [AuthGuard, SubjectGuard],
    },
    {path: 'subjects/:subjectId/tasks', component: SubjectContainerComponent, canActivate: [AuthGuard, TasksGuard]},
    {
        path: 'subjects/:subjectId/tasks/create',
        component: TaskCreatorContainerComponent,
        canActivate: [AuthGuard, AllSubjectsGuard],
    },
    {path: 'tasks/create', component: TaskCreatorContainerComponent, canActivate: [AuthGuard, AllSubjectsGuard]},
    {
        path: 'subjects/:subjectId/tasks/:taskId/edit',
        component: TaskEditorContainerComponent,
        canActivate: [AuthGuard, AllSubjectsGuard, TaskGuard],
    },
];