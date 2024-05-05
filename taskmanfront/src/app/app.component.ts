import { Component } from '@angular/core';
import { LoginService } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanfront';
  token = localStorage.getItem('token') || '';

  constructor(
    private loginService: LoginService
  ){
    this.token = localStorage.getItem('token') || '';
  }
  
  logOut() {
    this.loginService.logOut();
    this.token = localStorage.getItem('token') || '';
  }

  onActivate($event: any) {
    this.token = localStorage.getItem('token') || '';
  }
  
}
