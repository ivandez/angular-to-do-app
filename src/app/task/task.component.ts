import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TASK } from '../mock-task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  faTrash = faTrash;
  faCheck = faCheck;
  tasks = TASK;
  constructor() {}

  ngOnInit(): void {}
}
