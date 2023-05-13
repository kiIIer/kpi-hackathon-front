import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Subject} from '../../store/entities/subject/subject.model';

@Injectable({
    providedIn: 'root',
})
export class SubjectService {
    private baseUrl = 'http://localhost:8080/api/Subject';

    constructor(private http: HttpClient) {
    }

    // getSubjectById(id: number): Observable<HttpResponse<Subject>> {
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.get<Subject>(url, { observe: 'response' });
    // }
    //
    // // Without tasks, will return new
    // updateSubjectById(id: number, updatedSubject: Subject): Observable<HttpResponse<Subject>> {
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.put<Subject>(url, updatedSubject, { observe: 'response' });
    // }
    //
    // deleteSubjectById(id: number): Observable<HttpResponse<void>> {
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.delete<void>(url, { observe: 'response' });
    // }
    //
    // // Without tasks
    // getSubjects(): Observable<HttpResponse<Subject[]>> {
    //     const mockData: Subject[] = [
    //         { id: 1, name: 'Subject 1', description: 'Description 1', maxGrade: 100, deadline: '1234' },
    //         { id: 2, name: 'Subject 2', description: 'Description 2', maxGrade: 90, deadline: '4321' },
    //         // Add more mock subjects as needed
    //     ];
    //
    //     // Create an HttpResponse object with the mock data
    //     const response: HttpResponse<Subject[]> = new HttpResponse({
    //         body: mockData,
    //         status: 200,
    //         statusText: 'OK',
    //     });
    //
    //     // Return the mock data as an observable
    //     return of(response);
    //     // Comment out the real API call
    //     // return this.http.get<Subject[]>(this.baseUrl, { observe: 'response' });
    // }
    //
    // // Without tasks
    // createSubject(newSubject: Subject): Observable<HttpResponse<Subject>> {
    //     return this.http.post<Subject>(this.baseUrl, newSubject, { observe: 'response' });
    // }

    getSubjectById(id: number): Observable<HttpResponse<Subject>> {
        console.log('getSubjectById ' + id);
        const mockSubject: Subject = {
            id: 1,
            name: 'Mock Subject',
            description: 'Mock Subject Description',
            maxGrade: 100,
            deadline: '2023-05-13T12:06:17.584Z',
        };

        const response: HttpResponse<Subject> = new HttpResponse({
            body: mockSubject,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    updateSubjectById(id: number, updatedSubject: Subject): Observable<HttpResponse<Subject>> {
        console.log('updateSubjectby id ' + id);
        console.log(updatedSubject);
        const mockUpdatedSubject: Subject = {
            ...updatedSubject,
            id: id,
        };

        const response: HttpResponse<Subject> = new HttpResponse({
            body: mockUpdatedSubject,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    deleteSubjectById(id: number): Observable<HttpResponse<void>> {
        console.log('deleteSubjectById ' + id);
        const response: HttpResponse<void> = new HttpResponse({
            body: undefined,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    getSubjects(): Observable<HttpResponse<Subject[]>> {
        console.log('get subjects');
        const mockSubjects: Subject[] = [
            {
                id: 1,
                name: 'Mock Subject 1',
                description: 'Mock Subject 1 Description',
                maxGrade: 100,
                deadline: '2023-05-13T12:06:17.584Z',
            },
            {
                id: 2,
                name: 'Mock Subject 2',
                description: 'Mock Subject 2 Description',
                maxGrade: 90,
                deadline: '2023-05-13T12:06:17.584Z',
            },
        ];

        const response: HttpResponse<Subject[]> = new HttpResponse({
            body: mockSubjects,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

    createSubject(newSubject: Subject): Observable<HttpResponse<Subject>> {
        console.log('create subject');
        console.log(newSubject);
        const createdSubject: Subject = {
            ...newSubject,
            id: 1,
        };

        const response: HttpResponse<Subject> = new HttpResponse({
            body: createdSubject,
            status: 200,
            statusText: 'OK',
        });

        return of(response);
    }

}
