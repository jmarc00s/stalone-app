import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskInputComponent } from './components/task-input.component';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskInputComponent, TaskListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
