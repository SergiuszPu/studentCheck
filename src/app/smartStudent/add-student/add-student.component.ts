import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StudentsService} from '../../service/students.service';
import { Student } from '../../models/student.model';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})

export class  AddStudentComponent implements OnInit {

  studentsList: Student[];

  constructor( private studentService: StudentsService ) {
  }

  ngOnInit(): void {
    this.studentsList = this.studentService.getStudentsList();
  }

  AddNewStudent(data): void {
    this.studentService.addStudent(data);
  }
  // onAdd(): void {
  //   this.addData.emit(this.userForm.value);
  //   console.log('forms', this.userForm.value);
  //   this.userForm.reset();
  //   this.userForm.patchValue({
  //     id: this.generateId(),
  //     name: '' ,
  //     lastname: '',
  //     age: ''
  //   });
  // }
}
