import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MainPageComponent} from './presentation/main-page/main-page.component';
import {TasksPresentationComponent} from './presentation/tasks/tasks.presentation.component';

@Component({
    standalone: true,
    imports: [RouterModule, MatProgressSpinnerModule, MainPageComponent, TasksPresentationComponent],
    selector: 'idkf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'idkf';

}
