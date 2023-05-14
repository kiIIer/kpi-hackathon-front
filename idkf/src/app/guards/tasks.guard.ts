import {selectAll, selectFilteredTasks} from '../store/entities/task/task.reducer';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Store} from '@ngrx/store';
import {combineLatest, filter, Observable, tap, withLatestFrom} from 'rxjs';
import {getTasksBySubjectId, loadAllTasks} from '../store/entities/task/task.actions';
import {map} from 'rxjs/operators';
import {selectRouteParams} from '../store/router/router.selectors';

@Injectable({
    providedIn: 'root',
})
export class TasksGuard implements CanActivate {
    constructor(private store: Store) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check(route.paramMap.get('subjectId')!);
    }

    check(subjectId: string): Observable<boolean> {
        const id = parseInt(subjectId, 10);
        return this.store.select(selectFilteredTasks).pipe(
            tap((tasks) => {
                    this.store.dispatch(getTasksBySubjectId({subjectId: id}));
            }),
            // filter((tasks) => tasks.length != 0),
            map(() => true),
        );
    }


}