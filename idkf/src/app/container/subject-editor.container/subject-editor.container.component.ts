import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Task} from '../../store/entities/task/task.model';
import {selectCurrentTask} from '../../store/entities/task/task.reducer';
import {updateTask} from '../../store/entities/task/task.actions';
import {updateSubject} from '../../store/entities/subject/subject.actions';
import {selectCurrentSubject} from '../../store/entities/subject/subject.reducer';
import {Subject} from '../../store/entities/subject/subject.model';

@Component({
    selector: 'idkf-subject-editor-container',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './subject-editor.container.component.html',
    styleUrls: ['./subject-editor.container.component.css'],
})
export class SubjectEditorContainerComponent {

    currentSubject$: Observable<Subject | undefined>;

    constructor(private store: Store) {
        this.currentSubject$ = this.store.select(selectCurrentSubject);
    }

    onSubmit(subject: Subject) {
        this.store.dispatch(updateSubject({subject: subject}));
    }
}
