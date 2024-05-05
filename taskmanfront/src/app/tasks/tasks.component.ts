import { Component, OnInit } from '@angular/core';
import { TasksService } from './services';
import { Observable } from 'rxjs';
import { Task } from './shared/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];
  errorString: string = '';

  constructor(private taskService: TasksService) {

  }

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

}
