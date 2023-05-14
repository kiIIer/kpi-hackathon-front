import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Task} from '../../store/entities/task/task.model';
import {selectFilteredTasks, selectTasksBySubjectId} from '../../store/entities/task/task.reducer';
import {TasksPresentationComponent} from '../../presentation/tasks/tasks.presentation.component';

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
}
