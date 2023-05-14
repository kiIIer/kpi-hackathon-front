import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Task} from '../../store/entities/task/task.model';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    private baseUrl = 'http://localhost:7097/api/tasks';

    constructor(private http: HttpClient) {
    }


    getTaskById(id: number): Observable<HttpResponse<Task>> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Task>(url, {observe: 'response'});
    }

    // Will return new
    updateTaskById(id: number, updatedTask: Task): Observable<HttpResponse<Task>> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.put<Task>(url, updatedTask, {observe: 'response'});
    }

    deleteTaskById(id: number): Observable<HttpResponse<void>> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url, {observe: 'response'});
    }

    getTasks(): Observable<HttpResponse<Task[]>> {
       return this.http.get<Task[]>(this.baseUrl, {observe: 'response'});
    }

    createTask(newTask: Task): Observable<HttpResponse<Task>> {
        return this.http.post<Task>(this.baseUrl, newTask, {observe: 'response'});
    }
    getTasksOfSubjectById(subjectId: number): Observable<HttpResponse<Task[]>> {
        const url = `${this.baseUrl}?subjectId=${subjectId}`;
        return this.http.get<Task[]>(url, { observe: 'response' });
    }

}
