import { Injectable } from '@angular/core';
import { TASK } from './mock-task';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  id: number = 0;

  constructor() {}

  getTask(): Task[] {
    return TASK;
  }

  createTask(description: string): void {
    let newTask: Task = {
      id: this.id,
      description: description,
      done: false,
    };

    TASK.push(newTask);

    this.id++;
  }
}
