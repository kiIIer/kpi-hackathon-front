import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'idkf-subjects-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjects.container.component.html',
  styleUrls: ['./subjects.container.component.css']
})
export class SubjectsContainerComponent {
  constructor(private store: Store) {}
}
