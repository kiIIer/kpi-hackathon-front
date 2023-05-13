import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {TasksService} from '../../../service/tasks/tasks.service';
import {errorTasks, loadAllTasks, TaskActions} from '../../entities/task/task.actions';
import {map, mergeMap} from 'rxjs/operators';


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


    constructor(private actions$: Actions, private tasksService: TasksService) {
    }
}
