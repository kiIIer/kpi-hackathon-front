import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';
import {filter, Observable, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectAll} from '../store/entities/task/task.reducer';
import {loadAllTasks} from '../store/entities/task/task.actions';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AllTasksGuard implements CanActivate {
    constructor(private store: Store) {
    }

    canActivate(): Observable<boolean> {
        return this.check();
    }

    check(): Observable<boolean> {
        return this.store.select(selectAll).pipe(
            tap((tasks) => {
                if (tasks.length == 0) {
                    this.store.dispatch(loadAllTasks());
                }
            }),
            filter((tasks) => tasks.length != 0),
            map(() => true),
        );
    }

}