import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import {Update} from '@ngrx/entity';

import {Task} from './task.model';
import {Subject} from '../subject/subject.model';

export const loadAllTasks = createAction('Load Tasks');
export const errorTasks = createAction('Error Tasks', props<{ error: any }>());
export const createTask = createAction('Create Task', props<{ task: Task }>());
export const updateTask = createAction('Update Task', props<{ task: Task }>());
export const deleteTask = createAction('Delete Task', props<{ id: number }>());
export const getTasksBySubjectId = createAction('Get Tasks by Subject', props<{ subjectId: number }>());
export const loadTaskById = createAction('Load Task By Id', props<{ id: number }>());


export const TaskActions = createActionGroup({
    source: 'Task/API',
    events: {
        'Load Tasks': props<{ tasks: Task[] }>(),
        'Add Task': props<{ task: Task }>(),
        'Upsert Task': props<{ task: Task }>(),
        'Add Tasks': props<{ tasks: Task[] }>(),
        'Upsert Tasks': props<{ tasks: Task[] }>(),
        'Update Task': props<{ task: Update<Task> }>(),
        'Update Tasks': props<{ tasks: Update<Task>[] }>(),
        'Delete Task': props<{ id: number }>(),
        'Delete Tasks': props<{ ids: number[] }>(),
        'Clear Tasks': emptyProps(),
    },
});
