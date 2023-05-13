import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Task } from './task.model';

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
    'Delete Task': props<{ id: string }>(),
    'Delete Tasks': props<{ ids: string[] }>(),
    'Clear Tasks': emptyProps(),
  }
});
