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

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
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
        console.log(response);
        this.router.navigate(['/login'])
      },
     error: (error) => {
        console.log(error)
     }})
  }

  backClicked() {
    this.location.back();
  }

}
