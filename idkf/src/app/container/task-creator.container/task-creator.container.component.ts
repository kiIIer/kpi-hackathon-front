import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {createTask} from '../../store/entities/task/task.actions';
import {Task} from '../../store/entities/task/task.model';
import {Observable} from 'rxjs';
import {Subject} from '../../store/entities/subject/subject.model';
import {selectCurrentSubject} from '../../store/entities/subject/subject.reducer';
import {TaskEditorPresentationComponent} from '../../presentation/task-editor/task-editor.presentation.component';

@Component({
    selector: 'idkf-task-creator-container',
    standalone: true,
    imports: [CommonModule, TaskEditorPresentationComponent],
    templateUrl: './task-creator.container.component.html',
    styleUrls: ['./task-creator.container.component.css'],
})
export class TaskCreatorContainerComponent {
    currentSubject$: Observable<Subject | undefined>;

    constructor(private store: Store) {
        this.currentSubject$ = this.store.select(selectCurrentSubject);
    }

    onSubmit(task: Task) {
        this.store.dispatch(createTask({task: task}));
    }
}
