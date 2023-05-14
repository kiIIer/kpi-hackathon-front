import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Subject} from '../../store/entities/subject/subject.model';

@Injectable({
    providedIn: 'root',
})
export class SubjectService {
    private baseUrl = 'http://localhost:7097/api/Subject';

    constructor(private http: HttpClient) {
    }

    getSubjectById(id: number): Observable<HttpResponse<Subject>> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<Subject>(url, { observe: 'response' });
    }

    // Without tasks, will return new
    updateSubjectById(id: number, updatedSubject: Subject): Observable<HttpResponse<Subject>> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.put<Subject>(url, updatedSubject, { observe: 'response' });
    }

    deleteSubjectById(id: number): Observable<HttpResponse<void>> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url, { observe: 'response' });
    }

    // Without tasks
    getSubjects(): Observable<HttpResponse<Subject[]>> {
        return this.http.get<Subject[]>(this.baseUrl, { observe: 'response' });
    }

    // Without tasks
    createSubject(newSubject: Subject): Observable<HttpResponse<Subject>> {
        return this.http.post<Subject>(this.baseUrl, newSubject, { observe: 'response' });
    }
}
