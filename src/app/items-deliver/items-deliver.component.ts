import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentsService } from '../service/students.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Col } from '../models/col.model';


@Component({
  selector: 'app-items-deliver',
  templateUrl: './items-deliver.component.html',
  styleUrls: ['./items-deliver.component.scss']
})

export class ItemsDeliverComponent implements OnInit {

  products: Student[];
  columns: Col[];


  constructor(private productService: StudentsService, private route: ActivatedRoute, private router: Router) {
  }

  onAdd(event): void {
    this.productService.addStudent(event);
    console.log('items-deliver', event);
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
    console.log(' items-deliver', event);
  }

  ngOnInit(): void {
      this.products = this.productService.getStudentsList();
      console.log('items-deliver:', this.products);

      this.columns = [
        { fieldName: 'id', header: 'ID' },
        { fieldName: 'firstname', header: 'Firstname' },
        { fieldName: 'lastname', header: 'Lastname' },
        { fieldName: 'age', header: 'Age' }
      ];
  }
}
