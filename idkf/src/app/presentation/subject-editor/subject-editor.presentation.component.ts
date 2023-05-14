import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subject} from '../../store/entities/subject/subject.model';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
    selector: 'idkf-subject-editor-presentation',
    standalone: true,
    imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
    templateUrl: './subject-editor.presentation.component.html',
    styleUrls: ['./subject-editor.presentation.component.css'],
})
export class SubjectEditorPresentationComponent {
    @Input() currentSubject: Subject | undefined | null;
    @Output() submitEventer: EventEmitter<Subject>;

    subjectForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.submitEventer = new EventEmitter<Subject>();
        this.subjectForm = this.formBuilder.group({
            ['name']: [this.currentSubject ? this.currentSubject.name : '', Validators.required],
            ['description']: [this.currentSubject ? this.currentSubject.description : ''],
            ['maxGrade']: [this.currentSubject ? this.currentSubject.maxGrade : '', Validators.required],
            ['deadline']: [this.currentSubject ? this.currentSubject.deadline : '', Validators.required],
        });
    }

    submit() {
        if (!this.subjectForm.valid) {
            return;
        }

        const subject: Subject = {
            ...this.currentSubject,
            name: this.subjectForm.value.name,
            description: this.subjectForm.value.description,
            maxGrade: this.subjectForm.value.maxGrade,
            deadline: this.subjectForm.value.deadline,
        } as Subject;

        this.submitEventer.emit(subject);
    }
}
