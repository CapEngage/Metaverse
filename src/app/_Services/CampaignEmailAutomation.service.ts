import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
export class Task {
  _id: String;
  Email: String;
  Name: String;
  Phone: String;
  Location: String;
  createdAt: Date;
  updatedAt: Date;
  
}
@Injectable({
  providedIn: 'root'
})
export class CampaignEmailAutomationService {

  baseUri: string = 'https://neo-sigma.vercel.app/campaigns/email';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create
  createCampaignEmailAutomation(data): Observable<any> {
    let url = `${this.baseUri}/`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all CampaignEmailAutomations
  getAllCampaignEmailAutomation() {
    return this.http.get(`${this.baseUri}`);
  }
  // Get CampaignEmailAutomation
  getCampaignEmailAutomationById(id): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update CampaignEmailAutomation
  updateCampaignEmailAutomationById(id, data): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete CampaignEmailAutomation
  deleteCampaignEmailAutomationById(id): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
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