import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Subject} from '../../store/entities/subject/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseUrl = 'http://localhost:8080/api/Subject';

  constructor(private http: HttpClient) { }

  getSubjectById(id: number): Observable<Subject> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Subject>(url);
  }

  // Without tasks, will return new
  updateSubjectById(id: number, updatedSubject: Subject): Observable<Subject> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Subject>(url, updatedSubject);
  }

  deleteSubjectById(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  // Without tasks
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.baseUrl);
  }

  // Without tasks
  createSubject(newSubject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.baseUrl, newSubject);
  }
}
