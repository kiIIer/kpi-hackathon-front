import {createFeature, createReducer, createSelector, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Task} from './task.model';
import {TaskActions} from './task.actions';
import {selectRouteParams} from '../../router/router.selectors';

export const tasksFeatureKey = 'tasks';

export type TaskState = EntityState<Task>

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TaskState = adapter.getInitialState({
    // additional entity state properties
});

export const reducer = createReducer(
    initialState,
    on(TaskActions.addTask,
        (state, action) => adapter.addOne(action.task, state),
    ),
    on(TaskActions.upsertTask,
        (state, action) => adapter.upsertOne(action.task, state),
    ),
    on(TaskActions.addTasks,
        (state, action) => adapter.addMany(action.tasks, state),
    ),
    on(TaskActions.upsertTasks,
        (state, action) => adapter.upsertMany(action.tasks, state),
    ),
    on(TaskActions.updateTask,
        (state, action) => adapter.updateOne(action.task, state),
    ),
    on(TaskActions.updateTasks,
        (state, action) => adapter.updateMany(action.tasks, state),
    ),
    on(TaskActions.deleteTask,
        (state, action) => adapter.removeOne(action.id, state),
    ),
    on(TaskActions.deleteTasks,
        (state, action) => adapter.removeMany(action.ids, state),
    ),
    on(TaskActions.loadTasks,
        (state, action) => adapter.setAll(action.tasks, state),
    ),
    on(TaskActions.clearTasks,
        state => adapter.removeAll(state),
    ),
);

export const tasksFeature = createFeature({
    name: tasksFeatureKey,
    reducer,
    extraSelectors: ({selectTasksState}) => ({
        ...adapter.getSelectors(selectTasksState),
    }),
});

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = tasksFeature;

export const selectFilteredTasks = createSelector(
    selectRouteParams, // Select the route params
    selectAll, // Select all tasks
    (routeParams, tasks) => {
        console.log(routeParams)
        const subjectId = parseInt(routeParams['subjectId'], 10); // Parse the subjectId as an integer
        console.log(subjectId)
        return tasks.filter(task => task.subjectId === subjectId); // Filter tasks by subjectId
    }
);