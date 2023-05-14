import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Task} from '../../store/entities/task/task.model';
import {selectFilteredTasks} from '../../store/entities/task/task.reducer';
import {TasksPresentationComponent} from '../../presentation/tasks/tasks.presentation.component';
import {goToUrl} from '../../store/router/router.action';
import {deleteTask, updateTask} from '../../store/entities/task/task.actions';

@Component({
    selector: 'idkf-subject-container',
    standalone: true,
    imports: [CommonModule, TasksPresentationComponent],
    templateUrl: './subject.container.component.html',
    styleUrls: ['./subject.container.component.css'],
})
export class SubjectContainerComponent {
    tasks$: Observable<Task[]>;

    constructor(private store: Store) {
        this.tasks$ = this.store.select(selectFilteredTasks);
    }

    go(url: string) {
        this.store.dispatch(goToUrl({url: url}));
    }

    update(task: Task) {
        this.store.dispatch(updateTask({task: task}));
    }

    delete(task: Task) {
        this.store.dispatch(deleteTask({id: task.id}));
    }
}
