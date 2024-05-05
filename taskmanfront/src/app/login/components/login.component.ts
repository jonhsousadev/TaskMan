import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('formLogin') formLogin: NgForm | undefined;

  errorString: string = '';
  email = '';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
  })

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm.markAsPristine();
  }

  signUp() {
    this.router.navigate(['../signup']);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(
      this.loginForm.value
    ).subscribe({ 
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
        this.errorString = ''
      },
      error: (err) => {
        // This block will only execute if catchError is used
        this.errorString = err.error.message
        console.error('Error handler:', err.error.message);
      }})
  }

}
