import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../service/students.service';
import { Student } from '../../models/student.model';
import { ActivatedRoute, Router} from '@angular/router';
import { Col } from '../../models/col.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})

export class  EditStudentComponent implements OnInit {

  studentsList: Student[];
  studentId: string | number = this.route.snapshot.params.id;
  editStudent: Student[];
  columns: Col[];

  constructor( private studentService: StudentsService,
               private route: ActivatedRoute,
               private router: Router) {
  }

  ngOnInit(): void {
    this.studentsList = this.studentService.getStudentsList();

    this.editStudent = this.studentsList.filter((student: Student) => {
      if (student.id ===  this.studentId) {
        return student;
      }
      this.columns = [
        { fieldName: 'id', header: 'ID' },
        { fieldName: 'firstname', header: 'Firstname' },
        { fieldName: 'lastname', header: 'Lastname' },
        { fieldName: 'age', header: 'Age' }
      ];
    });
  }

  onEditStudent(event): void {
    this.studentService.editStudent(event);
    this.router.navigate(['/list'], {relativeTo: this.route});
  }
}
