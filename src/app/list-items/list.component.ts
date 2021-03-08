import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Base } from '../models/base.model';
import { Col } from '../models/col.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
              private router: Router) {

    // const ob = {};
    // this.cols.forEach(item =>  ob[item.fieldName] = [''])

    // this.userForm = this.fb.group({
    //   id: [''],
    //   name: ['', Validators.required],
    //   lastname: ['', Validators.required],
    //   age: ['', Validators.required],
    // });

    // this.userForm = this.fb.group({
    //   id: [''],
    //   name: ['', Validators.required],
    //   lastname: ['', Validators.required],
    //   age: ['', Validators.required],
    // });
  }

  @Input() detail: Base[];
  @Input() cols: Col[];
  @Output() removeData: EventEmitter<Base> = new EventEmitter();
  @Output() editData: EventEmitter<Base> = new EventEmitter();

  editing = false;
  added = false;


  userForm: FormGroup;

  editObject = [];

  ngOnInit(): void {
  }

  onEdit(): void {
    this.editData.emit();
  }

  onRemove(event): void {
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
