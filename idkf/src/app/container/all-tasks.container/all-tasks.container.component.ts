import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Task} from '../../store/entities/task/task.model';
import {selectAll} from '../../store/entities/task/task.reducer';
import {TasksPresentationComponent} from '../../presentation/tasks/tasks.presentation.component';
import {goToUrl} from '../../store/router/router.action';

@Component({
    selector: 'idkf-all-tasks-container',
    standalone: true,
    imports: [CommonModule, TasksPresentationComponent],
    templateUrl: './all-tasks.container.component.html',
    styleUrls: ['./all-tasks.container.component.css'],
})
export class AllTasksContainerComponent {
    allTasks$: Observable<Task[]>;

    constructor(private store: Store) {
        this.allTasks$ = this.store.select(selectAll);
    }

    go(url: string) {
        this.store.dispatch(goToUrl({url: url}));
    }

    protected readonly event = event;
}
