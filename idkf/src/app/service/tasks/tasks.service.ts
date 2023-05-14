import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Task} from '../../store/entities/task/task.model';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    private baseUrl = 'http://localhost:8080/api/Task';

    constructor(private http: HttpClient) {
    }


    // getTaskById(id: number): Observable<HttpResponse<Task>> {
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.get<Task>(url, {observe: 'response'});
    // }
    //
    // // Will return new
    // updateTaskById(id: number, updatedTask: Task): Observable<HttpResponse<Task>> {
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.put<Task>(url, updatedTask, {observe: 'response'});
    // }
    //
    // deleteTaskById(id: number): Observable<HttpResponse<void>> {
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.delete<void>(url, {observe: 'response'});
    // }
    //
    // getTasks(): Observable<HttpResponse<Task[]>> {
    //     return this.http.get<Task[]>(this.baseUrl, {observe: 'response'});
    // }
    //
    // createTask(newTask: Task): Observable<HttpResponse<Task>> {
    //     return this.http.post<Task>(this.baseUrl, newTask, {observe: 'response'});
    // }

    // Get task by ID (mock implementation)
    getTaskById(id: number): Observable<HttpResponse<Task>> {
        console.log('getTaskById ' + id);
        const mockTask: Task = {
            id: 1,
            name: 'Mock Task',
            subjectId: 1,
            deadline: '2023-05-13T12:06:17.584Z',
            description: 'Mock Task Description',
            maxGrade: 100,
            status: 0,
        };

        const response: HttpResponse<Task> = new HttpResponse({
            body: mockTask,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    // Update task by ID (mock implementation)
    updateTaskById(id: number, updatedTask: Task): Observable<HttpResponse<Task>> {
        console.log('updateTaskById' + id);
        console.log(updatedTask);
        const mockUpdatedTask: Task = {
            ...updatedTask,
            id: id,
        };

        const response: HttpResponse<Task> = new HttpResponse({
            body: mockUpdatedTask,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    // Delete task by ID (mock implementation)
    deleteTaskById(id: number): Observable<HttpResponse<void>> {
        console.log('deleteTaskById' + id);
        const response: HttpResponse<void> = new HttpResponse({
            body: undefined,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    // Get all tasks (mock implementation)
    getTasks(): Observable<HttpResponse<Task[]>> {
        console.log('getTasks');
        const mockTasks: Task[] = [
            {
                id: 1,
                name: 'Mock Task 1',
                subjectId: 1,
                deadline: '2023-05-13T12:06:17.584Z',
                description: 'Mock Task 1 Description',
                maxGrade: 100,
                status: 0,
            },
            {
                id: 2,
                name: 'Mock Task 2',
                subjectId: 2,
                deadline: '2023-05-13T12:06:17.584Z',
                description: 'Mock Task 2 Description',
                maxGrade: 90,
                status: 0,
            },
        ];

        const response: HttpResponse<Task[]> = new HttpResponse({
            body: mockTasks,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    // Create a new task (mock implementation)
    createTask(newTask: Task): Observable<HttpResponse<Task>> {
        console.log('createTask');
        console.log(newTask);
        const mockCreatedTask: Task = {
            ...newTask,
            id: 3, // Generate a unique ID for the mock task
        };

        const response: HttpResponse<Task> = new HttpResponse({
            body: mockCreatedTask,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    getTasksOfSubjectById(subjectId: number): Observable<HttpResponse<Task[]>> {
        console.log('getTasksOfSubjectById');
        console.log(subjectId);

        const mockTasks: Task[] = [
            {
                id: 1,
                name: 'Mock Task 1',
                subjectId: 1,
                deadline: '2023-05-13T12:06:17.584Z',
                description: 'Mock Task 1 Description',
                maxGrade: 100,
                status: 0,
            },
            {
                id: 2,
                name: 'Mock Task 2',
                subjectId: 2,
                deadline: '2023-05-13T12:06:17.584Z',
                description: 'Mock Task 2 Description',
                maxGrade: 90,
                status: 0,
            },
        ];

        const filteredTasks = mockTasks.filter(
            (task) => task.subjectId === subjectId
        );

        const response: HttpResponse<Task[]> = new HttpResponse({
            body: filteredTasks,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }
}
