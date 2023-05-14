import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subject} from '../../store/entities/subject/subject.model';

@Component({
    selector: 'idkf-subject-editor-presentation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './subject-editor.presentation.component.html',
    styleUrls: ['./subject-editor.presentation.component.css'],
})
export class SubjectEditorPresentationComponent {
    @Input() currentSubject: Subject | undefined | null;
    @Output() submitEventer: EventEmitter<Subject>;

    constructor() {
        this.submitEventer = new EventEmitter<Subject>();
    }
}
