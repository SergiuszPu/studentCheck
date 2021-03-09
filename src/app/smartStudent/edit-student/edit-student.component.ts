import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StudentsService} from '../../service/students.service';
import { Student } from '../../models/student.model';



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})

export class  EditStudentComponent implements OnInit {

  studentsList: Student[];

  constructor( private studentService: StudentsService ) {
  }

  ngOnInit(): void {
    this.studentsList = this.studentService.getStudentsList();
  }

}
