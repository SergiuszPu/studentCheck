import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Base } from '../../models/base.model';
import { Col } from '../../models/col.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  @Input() studentArray: Base[];
  @Input() editData: Base[];
  @Input() formData: Col[];
  @Output() addItems = new EventEmitter<Base>();
  @Output() editForm = new EventEmitter<Base>();

  userForm: FormGroup;
  editing = false;

  constructor() {}

  ngOnInit(): void {
    const ob = {};
    this.formData.forEach(key => ob[key.fieldName] = new FormControl());
    this.userForm = new FormGroup(ob);

    if (this.editData) {
      this.editing = true;
      this.editData.forEach(data => this.userForm.setValue({ ...data }));
    }
  }

  onSubmit(form): void {
    this.editForm.emit(form.value);
  }

  onAdd(): void {
    this.addItems.emit(this.userForm.value);
    this.userForm.reset();
  }
}
