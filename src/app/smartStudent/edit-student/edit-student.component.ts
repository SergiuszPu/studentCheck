import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StudentsService} from '../../service/students.service';
import { Student } from '../../models/student.model';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})

export class  EditStudentComponent implements OnInit {

  studentsList: Student[];
  studentId: string | number;
  editStudent: Student[];
  constructor( private studentService: StudentsService,
               private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.studentsList = this.studentService.getStudentsList();
    this.studentId = this.route.snapshot.params.id;
    console.log('studentId: ', this.studentId);
    this.editStudent = this.studentService.pullEditStudent(this.studentId);
    console.log('editStudent', this.editStudent);
  }

  // onEditStudent(): void {
  //   this.editStudent = this.studentService.pullEditStudent(this.studentId);
  //   console.log('editStudent', this.editStudent);
  // }
}
