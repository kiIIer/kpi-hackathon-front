import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SubjectService} from '../../../service/subjects/subjects.service';
import {createSubject, errorSubjects, initSubjects, SubjectActions} from '../../entities/subject/subject.actions';
import {mergeMap, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map} from 'rxjs/operators';


@Injectable()
export class SubjectsEffects {

    init$ = this.actions$.pipe(
        ofType(initSubjects),
        mergeMap(() =>
            this.subjectsService.getSubjects().pipe(
                map((response) =>
                    response.ok
                        ? SubjectActions.loadSubjects({subjects: response.body!})
                        : errorSubjects({error: response.statusText}),
                ),
            ),
        ),
    );

    createSubject$ = this.actions$.pipe(
        ofType(createSubject),
        mergeMap((action) =>
            this.subjectsService.createSubject(action.subject).pipe(
                map((response) => response.ok
                    ? SubjectActions.addSubject({subject: response.body!})
                    : errorSubjects({error: response.statusText})),
            ),
        ),
    );


    constructor(private actions$: Actions, private subjectsService: SubjectService) {
    }
}
