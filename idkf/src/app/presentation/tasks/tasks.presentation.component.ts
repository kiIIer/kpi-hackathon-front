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
    styleUrls: ['./tasks.presentation.component.scss'],
})
export class TasksPresentationComponent {
    @Input() tasks: Task[] | null = [{
        id: 1,
        name: 'Системне програмування',
        description: 'Курсова робота',
        deadline: '2023-05-12T20:20:28.349Z',
        maxGrade: 10,
        status: 0,
        subjectId: 1,
    },
        {
            id: 2,
            name: 'Інженерія програмного забезпечення',
            description: 'Its like, not important',
            deadline: '2023-05-13T22:12:28.349Z',
            maxGrade: 9,
            status: 1,
            subjectId: 1,
        },
        {
            id: 3,
            name: 'Архітектра компютерів',
            description: 'Лабораторна робота № 5',
            deadline: '2023-05-20T15:12:28.349Z',
            maxGrade: 6,
            status: 1,
            subjectId: 1,
        },
    ];

    isDeadlineApproaching(deadline: string): boolean {
        const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;
        const deadlineTime = new Date(deadline).getTime();
        const currentTime = Date.now();
        const timeDiff = deadlineTime - currentTime;
        return timeDiff <= TWO_DAYS_IN_MS;
    }

    isOverdue(deadline: string): boolean {
        const deadlineDate = new Date(deadline);
        return deadlineDate.getTime() < Date.now();
    }
    getFormattedDate(deadline: string): string {
        const taskDeadline = new Date(deadline);
        const month = taskDeadline.getMonth() + 1;
        const day = taskDeadline.getDate();
        return `${day}/${month}`;
    }
}
