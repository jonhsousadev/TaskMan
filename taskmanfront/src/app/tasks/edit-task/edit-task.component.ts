import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../services';
import { Task } from '../shared/task.model';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {
  editTaskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    completed: new FormControl(''),
  })

  task: Task = new Task();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private taskService: TasksService
  ) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.taskService.findOne(id).subscribe(response => {
      console.log('task:',this.task)
      this.task = response
    });
  }

  onSubmit(): void {
    if (this.editTaskForm.invalid) {
      return;
    }

    const id = this.activatedRoute.snapshot.params['id'];

    this.taskService.update(id,
      this.editTaskForm.value
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
