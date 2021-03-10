import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../service/students.service';
import { Student } from '../../models/student.model';
import { Col } from '../../models/col.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})

export class  AddStudentComponent implements OnInit {

  studentsList: Student[];
  columns: Col[];

  constructor( private studentService: StudentsService,
               private route: ActivatedRoute,
               private router: Router) {
  }

  ngOnInit(): void {
    this.studentsList = this.studentService.getStudentsList();
    this.columns = [
      { fieldName: 'id', header: 'ID' },
      { fieldName: 'firstname', header: 'Firstname' },
      { fieldName: 'lastname', header: 'Lastname' },
      { fieldName: 'age', header: 'Age' }
    ];
  }

  AddNewStudent(data): void {
    this.studentService.addStudent(data);
    this.router.navigate(['/list'], {relativeTo: this.route});
  }
}
