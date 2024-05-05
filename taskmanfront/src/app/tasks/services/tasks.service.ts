import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, Observer, throwError } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { Task } from '../shared/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  serviceUrl = environment.apiUrl

  constructor(private http: HttpClient, private route: Router) { }

  create(body: any): Observable<any> {
    return this.http.post(this.serviceUrl+'/tasks', body)
  }

  update(id: string, body: any): Observable<any> {
    return this.http.patch(this.serviceUrl+'/tasks/'+id, body)
  }

  findAll(): Observable<any> {
    return this.http.get(this.serviceUrl+'/tasks')
  }

  findOne(id: string): Observable<Task> {
    return this.http.get(this.serviceUrl+'/tasks/'+id)
  }

  remove(id: string): Observable<Task> {
    return this.http.delete(this.serviceUrl+'/tasks/'+id)
  }



  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
