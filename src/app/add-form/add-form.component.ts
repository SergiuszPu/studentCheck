import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StudentsService} from '../service/students.service';
import { Student } from '../models/student.model';



@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})

export class  AddFormComponent implements OnInit {

  studentsList: Student[];

  constructor( private studentService: StudentsService ) {
  }

  ngOnInit(): void {
    this.studentsList = this.studentService.getStudentsList();
  }

  // onAdd(): void {
  //   this.addData.emit(this.userForm.value);
  //   console.log('add-item', this.userForm.value);
  //   this.userForm.reset();
  //   this.userForm.patchValue({
  //     id: this.generateId(),
  //     name: '' ,
  //     lastname: '',
  //     age: ''
  //   });
  // }
}
