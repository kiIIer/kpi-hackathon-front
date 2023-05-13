import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../../store/entities/task/task.model';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private baseUrl = 'http://localhost:8080/api/Task';

    constructor(private http: HttpClient) {
    }

    getTaskById(id: number): Observable<Task> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Task>(url);
    }

    // Will return new
    updateTaskById(id: number, updatedTask: Task): Observable<Task> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.put<Task>(url, updatedTask);
    }

    deleteTaskById(id: number): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url);
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.baseUrl);
    }

    createTask(newTask: Task): Observable<Task> {
        return this.http.post<Task>(this.baseUrl, newTask);
    }
}
