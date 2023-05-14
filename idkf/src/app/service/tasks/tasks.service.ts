import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../../store/entities/task/task.model';
import { switchMap } from 'rxjs/operators';
import {AuthService} from '@auth0/auth0-angular';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    private baseUrl = 'http://localhost:7097/api/tasks';

    constructor(private http: HttpClient, private authService: AuthService) {}

    getTaskById(id: number): Observable<HttpResponse<Task>> {
        const url = `${this.baseUrl}/${id}`;
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.get<Task>(url, { headers, observe: 'response' });
            })
        );
    }

    updateTaskById(id: number, updatedTask: Task): Observable<HttpResponse<Task>> {
        const url = `${this.baseUrl}/${id}`;
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.put<Task>(url, updatedTask, { headers, observe: 'response' });
            })
        );
    }

    deleteTaskById(id: number): Observable<HttpResponse<void>> {
        const url = `${this.baseUrl}/${id}`;
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.delete<void>(url, { headers, observe: 'response' });
            })
        );
    }

    getTasks(): Observable<HttpResponse<Task[]>> {
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.get<Task[]>(this.baseUrl, { headers, observe: 'response' });
            })
        );
    }

    createTask(newTask: Task): Observable<HttpResponse<Task>> {
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.post<Task>(this.baseUrl, newTask, { headers, observe: 'response' });
            })
        );
    }

    getTasksOfSubjectById(subjectId: number): Observable<HttpResponse<Task[]>> {
        const url = `$http://localhost:7097/api/subjects/${subjectId}/tasks`;
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.get<Task[]>(url, { headers, observe: 'response' });
            })
        );
    }

    private getHeadersWithAuthToken(token: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
}
