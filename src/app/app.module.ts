import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskFormComponent } from './components/task-form.component';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskFormComponent, TaskListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
