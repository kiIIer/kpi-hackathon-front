import {Routes} from '@angular/router';
import {SubjectsPresentationComponent} from './presentation/subjects/subjects.presentation.component';
import {AllTasksContainerComponent} from './container/all-tasks.container/all-tasks.container.component';
import {SubjectsContainerComponent} from './container/subjects.container/subjects.container.component';
import {SubjectContainerComponent} from './container/subject.container/subject.container.component';
import {TaskEditorContainerComponent} from './container/task-editor.container/task-editor.container.component';

export const appRoutes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    // {path: 'login', component: }
    {path: 'tasks', component: AllTasksContainerComponent},
    {path: 'subjects', component: SubjectsContainerComponent},
    {path: 'subjects/:subjectId/tasks', component: SubjectContainerComponent},
    {path: 'tasks/:taskId', component: TaskEditorContainerComponent},
    {path: 'subjects/:subjectId/edit', component: TaskEditorContainerComponent},
    // {path: 'tasks/:taskId/edit', component: EditTaskComponent},
    // {path: 'subjects/create', component: CreateSubjectComponent},
    // {path: 'tasks/create', component: CreateTaskComponent},
];