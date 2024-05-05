import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  errorString: string = '';

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',  Validators.compose([Validators.required, Validators.minLength(6)])),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {

  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    this.loginService.signUp(
      this.signUpForm.value
    ).subscribe( {
      next: (response) => {
        this.errorString = ''
        this.router.navigate(['/login'])
      },
     error: (err) => {
        this.errorString = err.error.message;
     }})
  }

  backClicked() {
    this.location.back();
  }

}
