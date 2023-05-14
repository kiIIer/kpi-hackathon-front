import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Task} from '../../store/entities/task/task.model';
import {loadAllTasks, updateTask} from '../../store/entities/task/task.actions';
import {Observable} from 'rxjs';
import {selectCurrentTask} from '../../store/entities/task/task.reducer';
import {TaskEditorPresentationComponent} from '../../presentation/task-editor/task-editor.presentation.component';
import {Subject} from '../../store/entities/subject/subject.model';
import {selectAll, selectCurrentSubject} from '../../store/entities/subject/subject.reducer';
import {selectRouteParams} from '../../store/router/router.selectors';
import {map} from 'rxjs/operators';
import {goToUrl} from '../../store/router/router.action';
import {initSubjects} from '../../store/entities/subject/subject.actions';

@Component({
    selector: 'idkf-task-editor-container',
    standalone: true,
    imports: [CommonModule, TaskEditorPresentationComponent],
    templateUrl: './task-editor.container.component.html',
    styleUrls: ['./task-editor.container.component.css'],
})
export class TaskEditorContainerComponent {
    currentSubject$: Observable<Subject | undefined>;
    subjects$: Observable<Subject[]>;
    currentTask$: Observable<Task | undefined>;

    constructor(private store: Store) {
        this.currentTask$ = this.store.select(selectCurrentTask);
        this.currentSubject$ = this.store.select(selectCurrentSubject);
        this.subjects$ = this.store.select(selectAll);
        this.store.dispatch(initSubjects())
    }

    onSubmit(task: Task) {
        this.store.dispatch(updateTask({task: task}));
        this.store.dispatch(loadAllTasks())
    }

    go(url: string) {
        this.store.dispatch(goToUrl({url: url}));
    }
}
