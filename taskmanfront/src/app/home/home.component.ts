import { Component } from '@angular/core';
import { LoginService } from '../login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private loginService: LoginService) {

  }
}
