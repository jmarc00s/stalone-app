import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-task-list',
  template: `<div>
    <ul>
      <li *ngFor="let task of tasks">{{ task }}</li>
    </ul>
  </div>`,
})
export class TaskListComponent implements OnInit {
  @Input() tasks: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
