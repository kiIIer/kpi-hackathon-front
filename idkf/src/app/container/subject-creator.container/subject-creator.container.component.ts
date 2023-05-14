import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {
    SubjectEditorPresentationComponent,
} from '../../presentation/subject-editor/subject-editor.presentation.component';
import {Subject} from '../../store/entities/subject/subject.model';
import {createSubject} from '../../store/entities/subject/subject.actions';
import {goToUrl} from '../../store/router/router.action';

@Component({
    selector: 'idkf-subject-creator-container',
    standalone: true,
    imports: [CommonModule, SubjectEditorPresentationComponent],
    templateUrl: './subject-creator.container.component.html',
    styleUrls: ['./subject-creator.container.component.css'],
})
export class SubjectCreatorContainerComponent {
    constructor(private store: Store) {
    }

    onSubmit(subject: Subject) {
        this.store.dispatch(createSubject({subject: subject}));
    }

    go(url: string) {
        this.store.dispatch(goToUrl({url: url}));
    }
}
