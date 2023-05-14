import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Store} from '@ngrx/store';
import {MainPageComponent} from '../../presentation/main-page/main-page.component';
import {checkAuth, logout} from '../../store/entities/auth/auth.actions';
import {goToUrl} from '../../store/router/router.action';

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

    go(url: string) {
        this.store.dispatch(goToUrl({url: url}));
    }

    logout() {
        this.store.dispatch(logout());
    }
}
