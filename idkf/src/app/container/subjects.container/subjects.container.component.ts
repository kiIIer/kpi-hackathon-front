import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Subject} from '../../store/entities/subject/subject.model';
import {Observable} from 'rxjs';
import {selectAll} from '../../store/entities/subject/subject.reducer';
import {SubjectsPresentationComponent} from '../../presentation/subjects/subjects.presentation.component';
import {goToUrl} from '../../store/router/router.action';
import {updateTask} from '../../store/entities/task/task.actions';
import {Task} from '../../store/entities/task/task.model'

@Component({
    selector: 'idkf-subjects-container',
    standalone: true,
    imports: [CommonModule, SubjectsPresentationComponent],
    templateUrl: './subjects.container.component.html',
    styleUrls: ['./subjects.container.component.css'],
})
export class SubjectsContainerComponent {
    subjects$: Observable<Subject[]>;

    constructor(private store: Store) {
        this.subjects$ = this.store.select(selectAll);
    }

    go(url: string) {
        this.store.dispatch(goToUrl({url: url}));
    }

}
