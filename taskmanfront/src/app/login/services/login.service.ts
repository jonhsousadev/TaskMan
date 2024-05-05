import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serviceUrl = environment.apiUrl
  userIsLoggedIn = false;

  constructor(private http: HttpClient, private route: Router) { }

  login(data: any): Observable<any> {
    return this.http.post(this.serviceUrl+'/auth/login',data).pipe(
      catchError(this.handleError)
    );
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.clear();
    this.route.navigate(['/'])
  }

  signUp(data: any): Observable<any> {
    return this.http.post(this.serviceUrl+'/auth/signup',data).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
