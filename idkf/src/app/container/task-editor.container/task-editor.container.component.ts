import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Task} from '../../store/entities/task/task.model';
import {updateTask} from '../../store/entities/task/task.actions';
import {Observable} from 'rxjs';
import {selectCurrentTask} from '../../store/entities/task/task.reducer';

@Component({
    selector: 'idkf-task-editor.container',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './task-editor.container.component.html',
    styleUrls: ['./task-editor.container.component.css'],
})
export class TaskEditorContainerComponent {

    currentTask$: Observable<Task | undefined>;

    constructor(private store: Store) {
        this.currentTask$ = this.store.select(selectCurrentTask);
    }

    onSubmit(task: Task) {
        this.store.dispatch(updateTask({task: task}));
    }
}
