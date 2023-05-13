import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MainPageComponent} from './presentation/main-page/main-page.component';
import {MatButtonModule} from '@angular/material/button';
import {TaskService} from './service/tasks/tasks.service';
import {AuthService} from '@auth0/auth0-angular';

@Component({
    standalone: true,
    imports: [RouterModule, MatProgressSpinnerModule, MainPageComponent, MatButtonModule],
    selector: 'idkf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'idkf';

    constructor(public auth: AuthService) {
    }

    printUserData() {
        this.auth.user$.forEach((u) => console.log(u));
        this.auth.getAccessTokenSilently().forEach((t)=>console.log(t))
    }
}
