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
import {TaskCreatorContainerComponent} from './container/task-creator.container/task-creator.container.component';

export const appRoutes: Routes = [
    // {path: '', redirectTo: '/login', pathMatch: 'full'},
    // {path: 'login', component: }
    {path: 'tasks', component: AllTasksContainerComponent},
    {path: 'subjects', component: SubjectsContainerComponent},
    {path: 'subjects/create', component: SubjectCreatorContainerComponent},
    {path: 'subjects/:subjectId/edit', component: SubjectEditorContainerComponent},
    {path: 'subjects/:subjectId/tasks', component: SubjectContainerComponent},
    {path: 'subject/:subjectId/tasks/create', component: TaskCreatorContainerComponent},
    {path: 'subjects/:subjectId/tasks/:taskId/edit', component: TaskEditorContainerComponent},
    // {path: 'subjects/:subjectId/tasks/:taskId', component: EditTaskComponent},
];