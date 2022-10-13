import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<main class="min-h-screen text-gray-100 bg-slate-800">
    <h1 class="text-center text-3xl font-bold">Hello standalone components!</h1>
    <section class="w-1/2 mx-auto mt-8">
      <app-task-form (onCreateTask)="addTask($event)"></app-task-form>
      <app-task-list [tasks]="tasks"></app-task-list>
    </section>
  </main> `,
})
export class AppComponent {
  tasks: string[] = ['Task 01'];

  addTask(task: string): void {
    this.tasks.push(task);
  }
}
