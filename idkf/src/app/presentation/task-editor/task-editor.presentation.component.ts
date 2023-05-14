import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Task} from '../../store/entities/task/task.model';
import {Subject} from '../../store/entities/subject/subject.model';

@Component({
    selector: 'idkf-task-editor-presentation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './task-editor.presentation.component.html',
    styleUrls: ['./task-editor.presentation.component.css'],
})
export class TaskEditorPresentationComponent {
    @Input() currentTask: Task | undefined | null;
    @Input() currentSubject: Subject | undefined | null;
    @Output() submitEventer: EventEmitter<Task>;

    constructor() {
        this.submitEventer = new EventEmitter<Task>();
    }
}
