import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Subject} from './subject.model';
import {SubjectActions} from './subject.actions';
import {selectRouteParams} from '../../router/router.selectors';

export const subjectsFeatureKey = 'subjects';

export type SubjectState = EntityState<Subject>

export const adapter: EntityAdapter<Subject> = createEntityAdapter<Subject>();

export const initialState: SubjectState = adapter.getInitialState({
    // additional entity state properties
});

export const reducer = createReducer(
    initialState,
    on(SubjectActions.addSubject,
        (state, action) => adapter.addOne(action.subject, state),
    ),
    on(SubjectActions.upsertSubject,
        (state, action) => adapter.upsertOne(action.subject, state),
    ),
    on(SubjectActions.addSubjects,
        (state, action) => adapter.addMany(action.subjects, state),
    ),
    on(SubjectActions.upsertSubjects,
        (state, action) => adapter.upsertMany(action.subjects, state),
    ),
    on(SubjectActions.updateSubject,
        (state, action) => adapter.updateOne(action.subject, state),
    ),
    on(SubjectActions.updateSubjects,
        (state, action) => adapter.updateMany(action.subjects, state),
    ),
    on(SubjectActions.deleteSubject,
        (state, action) => adapter.removeOne(action.id, state),
    ),
    on(SubjectActions.deleteSubjects,
        (state, action) => adapter.removeMany(action.ids, state),
    ),
    on(SubjectActions.loadSubjects,
        (state, action) => adapter.setAll(action.subjects, state),
    ),
    on(SubjectActions.clearSubjects,
        state => adapter.removeAll(state),
    ),
);

export const subjectsFeature = createFeature({
    name: subjectsFeatureKey,
    reducer,
    extraSelectors: ({selectSubjectsState}) => ({
        ...adapter.getSelectors(selectSubjectsState),
    }),
});

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = subjectsFeature;

export const selectCurrentSubject = createSelector(
    selectRouteParams, // Select the route params
    selectEntities, // Select the task entities dictionary
    (routeParams, subjectEntities) => {
        const subjectId = parseInt(routeParams['subjectId'], 10); // Parse the subjectId as an integer

        return subjectEntities[subjectId];
    },
);
