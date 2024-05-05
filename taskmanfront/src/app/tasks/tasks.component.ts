import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TasksService } from './services';
import { Observable } from 'rxjs';
import { Task } from './shared/task.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];
  errorString: string = '';

  constructor(
    private taskService: TasksService, 
    private router: Router) {}

  ngOnInit(): void {
      this.findAll();
  }

  findAll(): void {
    this.taskService.findAll().subscribe({ 
      next: (response) => {
        console.log(response)
        this.tasks = response
      },
      error: (err) => {
        // This block will only execute if catchError is used
        this.errorString = err.error.message
      }})
  }

  createTask() {
    this.router.navigate(['/create'])
  }

  editTask(task: Task) {
    this.router.navigate(['/edit/'+task._id])
  }

  removeTask(task: Task) {
    if(!task._id) {
      return;
    }

    this.taskService.remove(task._id
    ).subscribe( {
      next: (response) => {
        window.location.reload();
      },
     error: (error) => {
        console.log(error)
     }})
  }

  toggleCompleted(task: Task) {
    if(!task._id) {
      return;
    }

    const newTask = {
      _id: task._id,
      title: task.title,
      completed: !task.completed
    }

    this.taskService.update(newTask._id,
      newTask
    ).subscribe( {
      next: (response) => {
        console.log(response);
        this.router.navigate(['/home'])
      },
     error: (error) => {
        console.log(error)
     }})
  }

}
