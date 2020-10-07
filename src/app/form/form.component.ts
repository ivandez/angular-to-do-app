import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  description: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  createTask(description) {
    this.taskService.createTask(description);

    this.description = '';
  }
}
