import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'idkf-subject-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject.container.component.html',
  styleUrls: ['./subject.container.component.css']
})
export class SubjectContainerComponent {
  constructor(private store: Store) {}
}
