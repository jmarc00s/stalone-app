import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<main class="min-h-screen text-gray-100 bg-slate-800">
    <h1 class="text-center text-3xl font-bold">Hello standalone components!</h1>
    <app-task-input></app-task-input>
    <app-task-list></app-task-list>
  </main> `,
})
export class AppComponent {}
