import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from '../../models/base.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  @Input() studentArray: Base[];
  @Output() addStudent = new EventEmitter<Base>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [this.generateId()],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(form): void {
    console.log('forms', form.value);
  }

  onAdd(): void {
    this.addStudent.emit(this.userForm.value);
    console.log('forms', this.userForm.value);
    this.userForm.reset();
    this.userForm.patchValue({
      id: this.generateId(),
      name: '' ,
      lastname: '',
      age: ''
    });
  }

  generateId(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 3; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
