import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {Update} from '@ngrx/entity';

import {Subject} from './subject.model';

export const initSubjects = createAction('Init Subjects');
export const errorSubjects = createAction('Error Subjects', props<{ error: any }>());

export const SubjectActions = createActionGroup({
    source: 'Subject/API',
    events: {
        'Load Subjects': props<{ subjects: Subject[] }>(),
        'Add Subject': props<{ subject: Subject }>(),
        'Upsert Subject': props<{ subject: Subject }>(),
        'Add Subjects': props<{ subjects: Subject[] }>(),
        'Upsert Subjects': props<{ subjects: Subject[] }>(),
        'Update Subject': props<{ subject: Update<Subject> }>(),
        'Update Subjects': props<{ subjects: Update<Subject>[] }>(),
        'Delete Subject': props<{ id: string }>(),
        'Delete Subjects': props<{ ids: string[] }>(),
        'Clear Subjects': emptyProps(),
    },
});
