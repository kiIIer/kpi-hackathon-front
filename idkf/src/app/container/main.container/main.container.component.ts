import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {MainPageComponent} from '../../presentation/main-page/main-page.component';
import {checkAuth} from '../../store/entities/auth/auth.actions';

@Component({
    selector: 'idkf-main-container',
    standalone: true,
    imports: [CommonModule, MainPageComponent],
    templateUrl: './main.container.component.html',
    styleUrls: ['./main.container.component.css'],
})
export class MainContainerComponent {
    constructor(private store: Store) {
    }
}
