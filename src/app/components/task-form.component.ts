import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-task-form',
  template: `<div>
    <form [formGroup]="form">
      <input type="text" formControlName="value" class="input w-2/3" />
      <button class="btn btn-primary w-1/3" (click)="onCreateClick()">Criar</button>
    </form>
  </div>`,
})
export class TaskFormComponent implements OnInit {
  @Output() onCreateTask = new EventEmitter<string>();

  form!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      value: [null],
    });
  }

  onCreateClick() {
    const { value } = this.form.value;

    this.onCreateTask.emit(value);
    this.form.reset();
  }
}
