import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Subject } from '../../store/entities/subject/subject.model';
import { switchMap } from 'rxjs/operators';
import {AuthService} from '@auth0/auth0-angular';

@Injectable({
    providedIn: 'root',
})
export class SubjectService {
    private baseUrl = 'http://localhost:7097/api/Subject';

    constructor(private http: HttpClient, private authService: AuthService) {}

    getSubjectById(id: number): Observable<HttpResponse<Subject>> {
        const url = `${this.baseUrl}/${id}`;
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.get<Subject>(url, { headers, observe: 'response' });
            })
        );
    }

    updateSubjectById(id: number, updatedSubject: Subject): Observable<HttpResponse<Subject>> {
        const url = `${this.baseUrl}/${id}`;
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.put<Subject>(url, updatedSubject, { headers, observe: 'response' });
            })
        );
    }

    deleteSubjectById(id: number): Observable<HttpResponse<void>> {
        const url = `${this.baseUrl}/${id}`;
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.delete<void>(url, { headers, observe: 'response' });
            })
        );
    }

    getSubjects(): Observable<HttpResponse<Subject[]>> {
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.get<Subject[]>(this.baseUrl, { headers, observe: 'response' });
            })
        );
    }

    createSubject(newSubject: Subject): Observable<HttpResponse<Subject>> {
        return this.authService.getAccessTokenSilently().pipe(
            switchMap(token => {
                const headers = this.getHeadersWithAuthToken(token);
                return this.http.post<Subject>(this.baseUrl, newSubject, { headers, observe: 'response' });
            })
        );
    }

    private getHeadersWithAuthToken(token: string): HttpHeaders {
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
}
