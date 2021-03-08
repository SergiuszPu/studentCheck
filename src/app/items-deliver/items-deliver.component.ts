import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { ItemsService } from '../service/items.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'items-deliver',
  templateUrl: './items-deliver.component.html',
  styleUrls: ['./items-deliver.component.scss']
})

export class ItemsDeliverComponent implements OnInit {

  products: Student[];

  constructor(private productService: ItemsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.products = this.productService.getStudentList();
    console.log('items-detliver:', this.products);
  }

  onAdd(event) {
    this.productService.addStudent(event);
    console.log("items-deliver", event);
  }

  onEdit() {
    this.router.navigate(['/add'], {relativeTo: this.route});
  }

  onRemove(event) {
    this.productService.removeStudent(event)
    this.products = this.products.filter(item => {
      console.log(item.id, event.id);
      return item.id !== event.id;
    });
    console.log(' items-deliver', event);
  }
}
