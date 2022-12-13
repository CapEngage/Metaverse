import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse,} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventUploadService {
  API_URL: string = 'https://neo-sigma.vercel.app/brand/event';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create
  createEvent(data): Observable<any> {
    let apiUrl = `${this.API_URL}/`;
    return this.http.post(apiUrl, data).pipe(catchError(this.errorMgmt));
  }

  uploadEvent(data): Observable<any> {
    let apiUrl = `${this.API_URL}/uploadEvent`;
    return this.http.post(apiUrl, data).pipe(catchError(this.errorMgmt));
  }

  // Get all Events
  getEvents() {
    return this.http.get(`${this.API_URL}`);
  }
  // Get Event
  getEvent(id): Observable<any> {
    let apiUrl = `${this.API_URL}/${id}`;
    return this.http.get(apiUrl, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update Event
  updateEvent(id, data): Observable<any> {
    let apiUrl = `${this.API_URL}/${id}`;
    return this.http
      .put(apiUrl, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete Event
  deleteEvent(id): Observable<any> {
    let apiUrl = `${this.API_URL}/${id}`;
    return this.http
      .delete(apiUrl, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}