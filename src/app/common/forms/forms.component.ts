import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form, FormControl } from '@angular/forms';
import { Base } from '../../models/base.model';
import { Col } from '../../models/col.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  @Input() studentArray: Base[];
  @Input() editStudent: Base[]
  @Output() addItems = new EventEmitter<Base>();
  @Output() editForm = new EventEmitter<Base>();

  userForm: FormGroup;
  @Input() cols: Col[];

  constructor() {
      // const ob = {}
      // this.cols.forEach(key => ob[key.fieldName] = new FormControl())
      
    this.userForm = new FormGroup({
      id: new FormControl(this.generateId()),
      firstname:  new FormControl(),
      lastname: new FormControl(),
      age: new FormControl(),
    });
  }

  ngOnInit(): void {
    console.log('editStudetn ', this.editStudent);
    if (this.editStudent) {
      this.editStudent.forEach(data => this.userForm.setValue({ ...data }));
    }
    // const ob = {}
    // this.cols.(key => ob[key.fieldName] = new FormControl())
    // this.userForm = new FormGroup(ob)
  }

  onSubmit(form): void {
    console.log('forms', form.value);
    this.editForm.emit(form.value)
  }

  onAdd(): void {
    this.addItems.emit(this.userForm.value);
    console.log('forms', this.userForm.value);
    this.userForm.reset();
    this.userForm.patchValue({
      id: this.generateId()
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
