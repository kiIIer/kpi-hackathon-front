import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {Subject} from "../../store/entities/subject/subject.model";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'idkf-subjects-presentation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './subjects.presentation.component.html',
  styleUrls: ['./subjects.presentation.component.css'],
})

export class SubjectsPresentationComponent {
  @Input() subjects: Subject[] | null = [{
    id: 1,
    name: 'Системне програмування',
    description: 'Вчитель: Порєв В. М., залік або автомат',
    maxGrade: 100,
    deadline: '2023-06-24T23:00:00.349Z',
  },
    {
      id: 2,
      name: 'Алгоритми та методи обчислень',
      description: 'Вчитель: Новатарський А. О., екзамен',
      maxGrade: 100,
      deadline: '2023-06-24T23:00:00.349Z',
    },
    {
      id: 3,
      name: 'Англійська мова',
      description: 'Вчитель:Гаєва П. О., тест',
      maxGrade: 100,
      deadline: '2023-05-20T15:12:28.349Z',
    },
  ];
  @Output() navEventer: EventEmitter<string> = new EventEmitter<string>();

  getFormattedDate(deadline: string): string {
    const taskDeadline = new Date(deadline);
    const month = taskDeadline.getMonth() + 1;
    const day = taskDeadline.getDate();
    return `${day}/${month}`;
  }
}
