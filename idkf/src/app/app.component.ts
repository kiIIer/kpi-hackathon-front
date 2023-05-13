import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MainPageComponent} from './presentation/main-page/main-page.component';

@Component({
    standalone: true,
    imports: [RouterModule, MatProgressSpinnerModule, MainPageComponent],
    selector: 'idkf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'idkf';
}
