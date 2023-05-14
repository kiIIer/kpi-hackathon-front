import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TasksService} from '../../../service/tasks/tasks.service';
import {
    createTask,
    deleteTask,
    errorTasks,
    loadAllTasks,
    TaskActions,
    updateTask,
} from '../../entities/task/task.actions';
import {map, mergeMap} from 'rxjs/operators';
import {deleteSubject, errorSubjects, SubjectActions} from '../../entities/subject/subject.actions';


@Injectable()
export class TaskEffects {

    loadAllTasks$ = createEffect(() => this.actions$.pipe(
            ofType(loadAllTasks),
            mergeMap(() => this.tasksService.getTasks().pipe(
                    map((response) => response.ok
                        ? TaskActions.loadTasks({tasks: response.body!})
                        : errorTasks({error: response.statusText})),
                ),
            ),
        ),
    );

    createTask$ = createEffect(() => this.actions$.pipe(
            ofType(createTask),
            mergeMap((action) => this.tasksService.createTask(action.task).pipe(
                    map((response) => response.ok
                        ? TaskActions.addTask({task: response.body!})
                        : errorTasks({error: response.statusText})),
                ),
            ),
        ),
    );

    updateTask$ = createEffect(() => this.actions$.pipe(
            ofType(updateTask),
            mergeMap((action) => this.tasksService.updateTaskById(action.task.id, action.task).pipe(
                    map((response) => response.ok
                        ? TaskActions.updateTask({task: {id: response.body!.id, changes: response.body!}})
                        : errorTasks({error: response.statusText}),
                    ),
                ),
            ),
        ),
    );

    deleteTask$ = createEffect(() => this.actions$.pipe(
            ofType(deleteTask),
            mergeMap((action) =>
                this.tasksService.deleteTaskById(action.id).pipe(
                    map((response) => response.ok
                        ? TaskActions.deleteTask({id: action.id})
                        : errorTasks({error: response.statusText})),
                ),
            ),
        ),
    );


    constructor(private actions$: Actions, private tasksService: TasksService) {
    }
}
