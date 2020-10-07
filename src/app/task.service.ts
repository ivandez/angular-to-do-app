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
    // console.log(this.id);
    // console.log(TASK);
    this.id++;
  }

  deleteTask(taskId: number) {
    /*
      ISSUE: code should work fine with TASK.splice(taskId, 1)
      but for any reason i didn't find yet it does not work well

      first try with this mock-task:

      export const TASK: Task[] = [
  { id: 0, description: '0', done: true },
  { id: 1, description: '1', done: true },
  { id: 2, description: '2', done: true },
  { id: 3, description: '3', done: true },
];
  
  Doing this you'll find the following bugs:

  1. removing task 2 first and the task and after that if you try to delete task 3,
  task 3 won't remove

  2. removing task 0 and then try to remove task 1, tasks will be removing to end to start
    */

    if (TASK.length === 1) {
      TASK.shift();
    } else if (taskId === TASK[0].id) {
      TASK.shift();
    } else if (taskId === TASK[TASK.length - 1].id) {
      TASK.pop();
    } else {
      TASK.splice(taskId, 1);
    }
  }
}
