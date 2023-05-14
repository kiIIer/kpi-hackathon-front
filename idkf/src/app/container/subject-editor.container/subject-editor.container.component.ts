import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'load-subject-editor.container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subject-editor.container.component.html',
  styleUrls: ['./subject-editor.container.component.css']
})
export class SubjectEditorContainerComponent {
  constructor(private store: Store) {}
}
