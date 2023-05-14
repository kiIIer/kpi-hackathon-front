import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'idkf-task-creator-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-creator.container.component.html',
  styleUrls: ['./task-creator.container.component.css']
})
export class TaskCreatorContainerComponent {
  constructor(private store: Store) {}
}
