import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Store} from '@ngrx/store';
import {filter, Observable, tap} from 'rxjs';
import {map} from 'rxjs/operators';
import {selectIds} from '../store/entities/task/task.reducer';
import {loadTaskById} from '../store/entities/task/task.actions';

@Injectable({
    providedIn: 'root',
})
export class TaskGuard implements CanActivate {
    constructor(private store: Store) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check(route.paramMap.get('taskId')!);
    }

    check(taskId: string): Observable<boolean> {
        const id = parseInt(taskId, 10);
        return this.store.select(selectIds).pipe(
            tap((ids) => {
                console.log(id)
                console.log(ids)
                if (!(ids as number[]).includes(id)) {
                    this.store.dispatch(loadTaskById({id: id}));
                }
            }),
            filter((ids) => {
                return (ids as number[]).includes(id);
            }),
            map(() => true),
        );

    }
}