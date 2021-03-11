import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../service/students.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Col } from '../../models/col.model';

@Component({
  selector: 'app-items-deliver',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})

export class ListStudentComponent implements OnInit {

  students: Student[];
  columns: Col[];
  editStudent: Student[];

  constructor(private productService: StudentsService, private route: ActivatedRoute, private router: Router) {
  }

  onEditStudent(id): void {
    this.router.navigate(['/edit', id], {relativeTo: this.route});
  }

  onRemove(event): void {
    this.productService.removeStudent(event);
    this.students = this.students.filter(item => {
      return item.id !== event.id;
    });
  }

  ngOnInit(): void {
      this.students = this.productService.getStudentsList();

      this.columns = [
        { fieldName: 'id', header: 'ID' },
        { fieldName: 'firstname', header: 'Firstname' },
        { fieldName: 'lastname', header: 'Lastname' },
        { fieldName: 'age', header: 'Age' }
      ];
  }
}
