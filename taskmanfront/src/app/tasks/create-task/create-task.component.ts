import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from '../services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  createTaskForm = new FormGroup({
    title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])),
    completed: new FormControl(''),
  })

  checkState = false;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private taskService: TasksService
  ) {

  }

  onSubmit(): void {
    if (this.createTaskForm.invalid) {
      return;
    }

    this.taskService.create(
      this.createTaskForm.value
    ).subscribe( {
      next: (response) => {
        console.log(response);
        this.router.navigate(['/home'])
      },
     error: (error) => {
        console.log(error)
     }})
  }

  backClicked() {
    this.location.back();
  }
}
