import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { Task } from '../shared/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  serviceUrl = environment.apiUrl

  constructor(private http: HttpClient, private route: Router) { }

  findAll(): Observable<any> {
    return this.http.get(this.serviceUrl+'/tasks')
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
