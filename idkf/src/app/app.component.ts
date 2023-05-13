import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
    standalone: true,
    imports: [RouterModule, MatProgressSpinnerModule],
    selector: 'idkf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'idkf';
}
