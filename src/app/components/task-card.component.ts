import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  template: ` <div class="card">
    <div class="card-body bg-gray-400 text-gray-800">
      <p class="card-title">{{ task }}</p>
    </div>
  </div>`,
})
export class TaskCardComponent {
  @Input() task: string = '';
}
