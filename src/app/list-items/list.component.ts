import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Base } from '../models/base.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router) {
    this.userForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  @Input() detail: Base;
  @Output() removeData: EventEmitter<Base> = new EventEmitter();
  @Output() editData: EventEmitter<Base> = new EventEmitter();

  editing = false;
  added = false;

  cols: any[];
  userForm: FormGroup;

  editObject = [];

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'firstname', header: 'Firstname' },
      { field: 'lastname', header: 'Lastname' },
      { field: 'age', header: 'Age' }
    ];
  }

  onEdit() {
    this.editData.emit();
  }

  onRemove(event) {
    this.removeData.emit(event);
    console.log('list: ', event);
  }

  // handleEdit(event: Product) {
  //     console.log(event);
  //     this.editObject.push(event);
  //     // this.productService.editItem(event)
  // }

  // pushEdit(event) {
  //     this.productService.editItem(event);
  //     console.log(event);
  //     // this.userForm.reset()
  //     // this.detail = this.detail.map((item: Product) => {
  //     //     if (item.id === event.id) {
  //     //         item = Object.assign({}, item, event)
  //     //     }
  //     //     return item
  //     // })
  //     this.editing = !this.editing;
  // }
}
