import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  filteredTasks: any[] = [];
  errorString: string = '';
  filter: string = 'all'

  constructor(
    private taskService: TasksService, 
    private router: Router,
  ) {}

  ngOnInit(): void {
      this.findAll();
      this.filteredTasks = this.tasks
  }

  findAll(): void {
    this.taskService.findAll().subscribe({ 
      next: (response) => {
        this.tasks = response
        this.filteredTasks = this.tasks.map(t => Object.assign(t,{status: t.completed ? 'completed' : 'in progress'}))
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
    let removeConfirm = confirm('Are you sure that you want to delete this task?');
    if(removeConfirm) {
      this.taskService.remove(task._id
      ).subscribe( {
        next: (response) => {
          this.ngOnInit()
        },
        error: (error) => {

        }})
      }
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
        this.router.navigate(['/home'])
      },
     error: (error) => {
     }})
     this.ngOnInit()
  }

}
