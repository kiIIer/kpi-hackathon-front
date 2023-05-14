import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {createTask, loadAllTasks} from '../../store/entities/task/task.actions';
import {Task} from '../../store/entities/task/task.model';
import {Observable} from 'rxjs';
import {Subject} from '../../store/entities/subject/subject.model';
import {selectAll, selectCurrentSubject} from '../../store/entities/subject/subject.reducer';
import {TaskEditorPresentationComponent} from '../../presentation/task-editor/task-editor.presentation.component';
import {selectRouteParams} from '../../store/router/router.selectors';
import {map} from 'rxjs/operators';
import {goToUrl} from '../../store/router/router.action';
import {initSubjects} from '../../store/entities/subject/subject.actions';

@Component({
    selector: 'idkf-task-creator-container',
    standalone: true,
    imports: [CommonModule, TaskEditorPresentationComponent],
    templateUrl: './task-creator.container.component.html',
    styleUrls: ['./task-creator.container.component.css'],
})
export class TaskCreatorContainerComponent {
    subjects$: Observable<Subject[]>;

    constructor(private store: Store) {
        this.subjects$ = this.store.select(selectAll);
        this.store.dispatch(initSubjects())
    }

    onSubmit(task: Task) {
        this.store.dispatch(createTask({task: task}));
        this.store.dispatch(loadAllTasks())
    }

    go(url: string) {
        this.store.dispatch(goToUrl({url: url}));
    }
}
