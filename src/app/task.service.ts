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

  deleteTask(taskId: number): void {
    let task = TASK.find((TASK) => {
      if (TASK.id === taskId) {
        return TASK;
      }
    });

    let taskIndex = TASK.indexOf(task);

    TASK.splice(taskIndex, 1);
  }
}
