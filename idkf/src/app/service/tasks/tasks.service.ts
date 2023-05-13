import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from '../../store/entities/subject/subject.model';

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    private api_url = 'http://localhost:8080/subject';

    constructor(private http: HttpClient) {
    }

    getSubject(): Observable<Subject> {
        return this.http.get<Subject>(this.api_url);
    }
}
