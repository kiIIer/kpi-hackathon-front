import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Store} from '@ngrx/store';
import {filter, Observable, tap} from 'rxjs';
import {selectAll} from '../store/entities/subject/subject.reducer';
import {initSubjects} from '../store/entities/subject/subject.actions';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AllSubjectsGuard implements CanActivate {
    constructor(private store: Store) {
    }

    canActivate(): Observable<boolean> {
        return this.check();
    }

    check(): Observable<boolean> {
        return this.store.select(selectAll).pipe(
            tap((subjects) => {
                    this.store.dispatch(initSubjects());
            }),
            // filter((subjects) => subjects.length != 0),
            map(() => true),
        );
    }

}