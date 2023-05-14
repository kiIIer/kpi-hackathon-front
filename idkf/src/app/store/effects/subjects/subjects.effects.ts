import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SubjectService} from '../../../service/subjects/subjects.service';
import {
    createSubject, deleteSubject,
    errorSubjects,
    initSubjects, loadSubjectById,
    SubjectActions,
    updateSubject,
} from '../../entities/subject/subject.actions';
import {mergeMap, Observable, tap} from 'rxjs';
import {Action} from '@ngrx/store';
import {map} from 'rxjs/operators';


@Injectable()
export class SubjectsEffects {

    init$ = createEffect(() => this.actions$.pipe(
            ofType(initSubjects),
            tap(() => console.log('initting effect')),
            mergeMap(() =>
                this.subjectsService.getSubjects().pipe(
                    map((response) =>
                        response.ok
                            ? SubjectActions.loadSubjects({subjects: response.body!})
                            : errorSubjects({error: response.statusText}),
                    ),
                ),
            ),
        ),
    );

    createSubject$ = createEffect(() => this.actions$.pipe(
            ofType(createSubject),
            mergeMap((action) =>
                this.subjectsService.createSubject(action.subject).pipe(
                    map((response) => response.ok
                        ? SubjectActions.addSubject({subject: response.body!})
                        : errorSubjects({error: response.statusText})),
                ),
            ),
        ),
    );

    updateSubject$ = createEffect(() => this.actions$.pipe(
            ofType(updateSubject),
            mergeMap((action) =>
                this.subjectsService.updateSubjectById(action.subject.id, action.subject).pipe(
                    map((response) => response.ok
                        ? SubjectActions.updateSubject({subject: {id: response.body!.id, changes: response.body!}})
                        : errorSubjects({error: response.statusText}),
                    ),
                ),
            ),
        ),
    );

    deleteSubject$ = createEffect(() => this.actions$.pipe(
            ofType(deleteSubject),
            mergeMap((action) =>
                this.subjectsService.deleteSubjectById(action.id).pipe(
                    map((response) => response.ok
                        ? SubjectActions.deleteSubject({id: action.id})
                        : errorSubjects({error: response.statusText})),
                ),
            ),
        ),
    );

    loadSubjectById$ = createEffect(() => this.actions$.pipe(
            ofType(loadSubjectById),
            mergeMap((action) =>
                this.subjectsService.getSubjectById(action.id).pipe(
                    map((response) => response.ok
                        ? SubjectActions.addSubject({subject: response.body!})
                        : errorSubjects({error: response.statusText})),
                ),
            ),
        ),
    );

    constructor(private actions$: Actions, private subjectsService: SubjectService) {
    }
}
