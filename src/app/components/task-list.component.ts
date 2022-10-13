import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TaskCardComponent } from './task-card.component';

@Component({
  imports: [CommonModule, TaskCardComponent],
  standalone: true,
  selector: 'app-task-list',
  template: `
    <ul class="mt-8 overflow-auto h-96 p-4">
      <li class="my-2" *ngFor="let task of tasks">
        <app-task-card [task]="task"></app-task-card>
      </li>
    </ul>
  `,
})
export class TaskListComponent implements OnInit {
  @Input() tasks: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
