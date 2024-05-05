import { Component } from '@angular/core';
import { LoginService } from './login';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskMan';
  token = localStorage.getItem('token') || '';
  message$: Observable<string>

  constructor(
    private loginService: LoginService,
    private store: Store<AppState>
  ){
    this.message$ = this.store.select('message')
    this.token = localStorage.getItem('token') || '';

  }

  checkLoggedIn() {
    this.store.dispatch({type: 'token'})
  }
  
  logOut() {
    this.loginService.logOut();
    this.token = localStorage.getItem('token') || '';
  }

  onActivate($event: any) {
    this.token = localStorage.getItem('token') || '';
  }
  
}
