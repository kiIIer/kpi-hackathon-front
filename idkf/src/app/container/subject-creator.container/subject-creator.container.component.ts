import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'idkf-subject-creator-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-creator.container.component.html',
  styleUrls: ['./subject-creator.container.component.css']
})
export class SubjectCreatorContainerComponent {
  constructor(private store: Store) {}
}
