import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Task} from '../../store/entities/task/task.model';
import {Subject} from '../../store/entities/subject/subject.model';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Observable, of, startWith} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'idkf-task-editor-presentation',
    standalone: true,
    imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, TextFieldModule, MatAutocompleteModule],
    templateUrl: './task-editor.presentation.component.html',
    styleUrls: ['./task-editor.presentation.component.css'],
})
export class TaskEditorPresentationComponent implements OnInit {
    @Input() currentTask: Task | undefined | null;
    @Input() currentSubject: Subject | undefined | null;
    @Input() subjects: Subject[] | undefined | null;
    @Output() submitEventer: EventEmitter<Task>;

    filteredOptions: Observable<string[]>;
    taskForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.taskForm = formBuilder.group({});
        this.filteredOptions = of();
        this.submitEventer = new EventEmitter<Task>();
    }

    submit() {
        if (!this.taskForm.valid) {
            return;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const subjectId: number = this.subjects?.find((subject) => subject.name === this.taskForm.value.subjectName)?.id;

        const task: Task = {
            ...this.currentTask,
            name: this.taskForm.value.name,
            description: this.taskForm.value.description,
            maxGrade: this.taskForm.value.maxGrade,
            deadline: this.taskForm.value.deadline,
            subjectId: subjectId,
        } as Task;

        this.submitEventer.emit(task);
    }

    ngOnInit(): void {
        this.taskForm = this.formBuilder.group({
            ['name']: [this.currentTask ? this.currentTask.name : '', Validators.required],
            ['description']: [this.currentTask ? this.currentTask.description : ''],
            ['maxGrade']: [this.currentTask ? this.currentTask.maxGrade : '', Validators.required],
            ['deadline']: [this.currentTask ? this.currentTask.deadline : '', Validators.required],
            ['subjectName']: [this.currentSubject ? this.currentSubject.name : '', Validators.required],
        });

        this.filteredOptions = this.taskForm.controls['subjectName'].valueChanges.pipe(
            startWith(this.currentSubject ? this.currentSubject.name : ''),
            map(value => this._filter(value || '')),
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.subjects!.map((subject) => subject.name).filter(name => name.toLowerCase().includes(filterValue));
    }
}
