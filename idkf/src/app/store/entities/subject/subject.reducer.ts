import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Subject } from './subject.model';
import { SubjectActions } from './subject.actions';

export const subjectsFeatureKey = 'subjects';

export interface State extends EntityState<Subject> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Subject> = createEntityAdapter<Subject>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(SubjectActions.addSubject,
    (state, action) => adapter.addOne(action.subject, state)
  ),
  on(SubjectActions.upsertSubject,
    (state, action) => adapter.upsertOne(action.subject, state)
  ),
  on(SubjectActions.addSubjects,
    (state, action) => adapter.addMany(action.subjects, state)
  ),
  on(SubjectActions.upsertSubjects,
    (state, action) => adapter.upsertMany(action.subjects, state)
  ),
  on(SubjectActions.updateSubject,
    (state, action) => adapter.updateOne(action.subject, state)
  ),
  on(SubjectActions.updateSubjects,
    (state, action) => adapter.updateMany(action.subjects, state)
  ),
  on(SubjectActions.deleteSubject,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(SubjectActions.deleteSubjects,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(SubjectActions.loadSubjects,
    (state, action) => adapter.setAll(action.subjects, state)
  ),
  on(SubjectActions.clearSubjects,
    state => adapter.removeAll(state)
  ),
);

export const subjectsFeature = createFeature({
  name: subjectsFeatureKey,
  reducer,
  extraSelectors: ({ selectSubjectsState }) => ({
    ...adapter.getSelectors(selectSubjectsState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = subjectsFeature;