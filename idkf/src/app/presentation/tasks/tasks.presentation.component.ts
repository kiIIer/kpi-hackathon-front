import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {Task} from '../../store/entities/task/task.model';
import {NgForOf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'idkf-tasks-presentation',
    standalone: true,
    imports: [CommonModule, MatCardModule, NgForOf, MatIconModule],
    templateUrl: './tasks.presentation.component.html',
    styleUrls: ['./tasks.presentation.component.css'],
})
export class TasksPresentationComponent {
    @Input() tasks: Task[] = [{
        id: 1,
        name: 'Do this task',
        description: 'Its like, important',
        deadline: '12/01',
        maxGrade: 10,
        status: 1,
        subjectId: 1,
    },
        {
            id: 2,
            name: 'Do this task as well',
            description: 'Its like, not important',
            deadline: '11/01',
            maxGrade: 9,
            status: 0,
            subjectId: 1,
        },
    ];

    statuses = [
        {name: 'clear', class: 'red'},
        {name: 'menu', class: 'yellow'},
        {name: 'check', class: 'green'},
    ];
}
