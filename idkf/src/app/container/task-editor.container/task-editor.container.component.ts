import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Task} from '../../store/entities/task/task.model';
import {updateTask} from '../../store/entities/task/task.actions';

@Component({
    selector: 'idkf-task-editor.container',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './task-editor.container.component.html',
    styleUrls: ['./task-editor.container.component.css'],
})
export class TaskEditorContainerComponent {
    constructor(private store: Store) {
    }

    onSubmit(task: Task) {
        this.store.dispatch(updateTask({task: task}));
    }
}
