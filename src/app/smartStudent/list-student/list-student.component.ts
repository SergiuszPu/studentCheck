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

  products: Student[];
  columns: Col[];


  constructor(private productService: StudentsService, private route: ActivatedRoute, private router: Router) {
  }

  onAdd(event): void {
    this.productService.addStudent(event);
    console.log('list-student', event);
  }

  onEdit(): void {
    this.router.navigate(['/add'], {relativeTo: this.route});
  }

  onRemove(event): void {
    this.productService.removeStudent(event);
    this.products = this.products.filter(item => {
      console.log(item.id, event.id);
      return item.id !== event.id;
    });
    console.log(' list-student', event);
  }

  ngOnInit(): void {
      this.products = this.productService.getStudentsList();
      console.log('list-student:', this.products);

      this.columns = [
        { fieldName: 'id', header: 'ID' },
        { fieldName: 'firstname', header: 'Firstname' },
        { fieldName: 'lastname', header: 'Lastname' },
        { fieldName: 'age', header: 'Age' }
      ];
  }
}
