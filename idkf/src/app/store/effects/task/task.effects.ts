import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TasksService} from '../../../service/tasks/tasks.service';
import {
    createTask,
    deleteTask,
    errorTasks, getTasksBySubjectId,
    loadAllTasks, loadTaskById,
    TaskActions,
    updateTask,
} from '../../entities/task/task.actions';
import {map, mergeMap} from 'rxjs/operators';
import {deleteSubject, errorSubjects, loadSubjectById, SubjectActions} from '../../entities/subject/subject.actions';
import {tap} from 'rxjs';


@Injectable()
export class TaskEffects {

    loadAllTasks$ = createEffect(() => this.actions$.pipe(
            ofType(loadAllTasks),
            mergeMap(() => this.tasksService.getTasks().pipe(
                    map((response) => response.ok
                        ? TaskActions.upsertTasks({tasks: response.body!})
                        : errorTasks({error: response.statusText})),
                ),
            ),
        ),
    );

    createTask$ = createEffect(() => this.actions$.pipe(
            ofType(createTask),
            mergeMap((action) => this.tasksService.createTask(action.task).pipe(
                    tap((response) => console.log(response)),
                    map((response) => response.ok
                        ? TaskActions.upsertTask({task: response.body!})
                        : errorTasks({error: response.statusText})),
                ),
            ),
        ),
    );

    updateTask$ = createEffect(() => this.actions$.pipe(
            ofType(updateTask),
            mergeMap((action) => this.tasksService.updateTaskById(action.task.id, action.task).pipe(
                    tap((response) => console.log(response)),
                    map((response) => response.ok
                        ? TaskActions.upsertTask({task: response.body!})
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

    getTasksBySubjectId$ = createEffect(() => this.actions$.pipe(
            ofType(getTasksBySubjectId),
            mergeMap((action) =>
                this.tasksService.getTasksOfSubjectById(action.subjectId).pipe(
                    map((response) => response.ok
                        ? TaskActions.upsertTasks({tasks: response.body!})
                        : errorTasks({error: response.statusText})),
                ),
            ),
        ),
    );

    oadSubjectById$ = createEffect(() => this.actions$.pipe(
            ofType(loadTaskById),
            mergeMap((action) =>
                this.tasksService.getTaskById(action.id).pipe(
                    map((response) => response.ok
                        ? TaskActions.upsertTask({task: response.body!})
                        : errorTasks({error: response.statusText})),
                ),
            ),
        ),
    );


    constructor(private actions$: Actions, private tasksService: TasksService) {
    }
}
