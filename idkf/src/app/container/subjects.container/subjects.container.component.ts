import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {Subject} from '../../store/entities/subject/subject.model';
import {Observable} from 'rxjs';
import {selectAll} from '../../store/entities/subject/subject.reducer';

@Component({
    selector: 'idkf-subjects-container',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './subjects.container.component.html',
    styleUrls: ['./subjects.container.component.css'],
})
export class SubjectsContainerComponent {
    subjects$: Observable<Subject[]>;

    constructor(private store: Store) {
        this.subjects$ = this.store.select(selectAll);
    }
}