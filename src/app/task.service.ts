import { Injectable } from '@angular/core';
import { TASK } from './mock-task';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTask(): Task[] {
    return TASK;
  }
}
