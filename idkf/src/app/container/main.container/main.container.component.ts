import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  selector: 'idkf-main.container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.container.component.html',
  styleUrls: ['./main.container.component.css']
})
export class MainContainerComponent {
  constructor(private store: Store) {}
}
