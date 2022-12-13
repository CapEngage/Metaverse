import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandAccountService {
  baseUri: string = 'https://neo-sigma.vercel.app/brand/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // Create
  createBrandAccount(data): Observable<any> {
    let url = `${this.baseUri}/`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }
  // Get all BrandAccounts
  getBrandAccounts() {
    return this.http.get(`${this.baseUri}`);
  }
  // Get BrandAccount
  getBrandAccount(BrandCode): Observable<any> {
    let url = `${this.baseUri}/${BrandCode}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update BrandAccount
  updateBrandAccount(BrandCode, data): Observable<any> {
    let url = `${this.baseUri}/${BrandCode}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete BrandAccount
  deleteBrandAccount(id): Observable<any> {
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