import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'idkf-all-tasks-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-tasks.container.component.html',
  styleUrls: ['./all-tasks.container.component.css']
})
export class AllTasksContainerComponent {
  constructor(private store: Store) {}
}
