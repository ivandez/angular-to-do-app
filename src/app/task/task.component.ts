import { Component, OnInit, Input } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TASK } from '../mock-task';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  faTrash = faTrash;
  faCheck = faCheck;
  tasks: Task[];
  selectValue = 'todos';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(task?): void {
    if (task) return (this.tasks = task);
    else this.tasks = this.taskService.getTask();
  }

  onChange() {
    this.toggleTask(this.selectValue);
  }

  toggleTask(selectedOption) {
    let toggledTasks: Task[];

    switch (selectedOption) {
      case 'todos':
        toggledTasks = this.taskService.getTask();
        break;
      case 'completadas':
        toggledTasks = TASK.filter((task) => task.done == false);

        break;
      case 'incompletas':
        toggledTasks = TASK.filter((task) => task.done == true);

        break;
    }

    this.tasks = toggledTasks;
  }
}
