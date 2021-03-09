import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Base } from '../../models/base.model';
import { Col } from '../../models/col.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  // userForm: FormGroup;
  @Input() detail: Base[];
  @Input() cols: Col[];
  @Output() removeData: EventEmitter<Base> = new EventEmitter();
  @Output() editData: EventEmitter<Base> = new EventEmitter();

  constructor() {}

  userForm: FormGroup;
  editing = false;
  added = false;

  editObject = [];

  ngOnInit(): void {
    this.userForm = new FormGroup({
      // id: new FormControl(),
      // firstname:  new FormControl(),
      // lastname: new FormControl(),
      // age: new FormControl(),
    });
  }

  onEdit(id): void {
    console.log(id);
    this.editData.emit(id);
  }

  onRemove(event): void {
    this.removeData.emit(event);
    console.log('list: ', event);
    
    // const ob = {};

    // this.cols.forEach(item =>  ob[item.fieldName] = [''])

    //  this.detail.forEach(item => {
    //    Object.keys(item).forEach(key => ob[key] = new FormControl())
    //  })
    //  console.log(ob);
    //  this.userForm = new FormGroup(ob)
    //  console.log('value',this.userForm.value);
     
      
   
  }
}
