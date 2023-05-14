import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Store} from '@ngrx/store';
import {filter, Observable, tap} from 'rxjs';
import {selectFilteredTasks} from '../store/entities/task/task.reducer';
import {getTasksBySubjectId} from '../store/entities/task/task.actions';
import {map} from 'rxjs/operators';
import {selectIds} from '../store/entities/subject/subject.reducer';
import {loadSubjectById} from '../store/entities/subject/subject.actions';

@Injectable({
    providedIn: 'root',
})
export class SubjectGuard implements CanActivate {
    constructor(private store: Store) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check(route.paramMap.get('subjectId')!);
    }

    check(subjectId: string): Observable<boolean> {
        const id = parseInt(subjectId, 10);
        return this.store.select(selectIds).pipe(
            tap((ids) => {
                // if (!(ids as number[]).includes(id)) {
                    this.store.dispatch(loadSubjectById({id: id}));
                // }
            }),
            // filter((ids) => {
            //     return (ids as number[]).includes(id);
            // }),
            map(() => true),
        );

    }
}