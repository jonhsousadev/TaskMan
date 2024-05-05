import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorString: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {

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
        console.log(response)
        localStorage.setItem('token', response.token)
        this.router.navigate(['/home'])
      },
      error: (err) => {
        // This block will only execute if catchError is used
        this.errorString = err.error.message
        console.error('Error handler:', err.error.message);
      }})
  }

}
