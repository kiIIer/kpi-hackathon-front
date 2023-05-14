import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {Task} from '../../store/entities/task/task.model';
import {NgForOf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
    selector: 'idkf-tasks-presentation',
    standalone: true,
    imports: [CommonModule, MatCardModule, NgForOf, MatIconModule, MatButtonModule, MatMenuModule],
    templateUrl: './tasks.presentation.component.html',
    styleUrls: ['./tasks.presentation.component.scss'],
})
export class TasksPresentationComponent {
    @Input() tasks: Task[] | null = [];
    @Output() navEventer: EventEmitter<string> = new EventEmitter<string>();
    @Output() updateEventer: EventEmitter<Task> = new EventEmitter<Task>();

    status_l = [{color: 'red', icon: 'clear'}, {color: 'green', icon: 'done'}, {color: 'purple', icon: 'schedule'}];

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

    changeTask(task: Task, status: number): Task{
        return ({...task, status: status})
    }
}
