import {Routes} from '@angular/router';
import {SubjectsPresentationComponent} from './presentation/subjects/subjects.presentation.component';
import {AllTasksContainerComponent} from './container/all-tasks.container/all-tasks.container.component';
import {SubjectsContainerComponent} from './container/subjects.container/subjects.container.component';
import {SubjectContainerComponent} from './container/subject.container/subject.container.component';
import {TaskEditorContainerComponent} from './container/task-editor.container/task-editor.container.component';
import {SubjectEditorContainerComponent} from './container/subject-editor.container/subject-editor.container.component';
import {
    SubjectCreatorContainerComponent,
} from './container/subject-creator.container/subject-creator.container.component';

export const appRoutes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    // {path: 'login', component: }
    {path: 'tasks', component: AllTasksContainerComponent},
    {path: 'subjects', component: SubjectsContainerComponent},
    {path: 'subjects/:subjectId/tasks', component: SubjectContainerComponent},
    {path: 'tasks/:taskId', component: TaskEditorContainerComponent},
    {path: 'subjects/:subjectId/edit', component: SubjectEditorContainerComponent},
    // {path: 'tasks/:taskId/edit', component: EditTaskComponent},
    {path: 'subjects/create', component: SubjectCreatorContainerComponent},
    // {path: 'tasks/create', component: CreateTaskComponent},
];