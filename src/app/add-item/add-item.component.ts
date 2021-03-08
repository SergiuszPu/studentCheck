import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product.model';


@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})

export class AddItemComponent implements OnInit {

    @Output() addData = new EventEmitter<Product[]>()

    userForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.userForm = this.fb.group({
            id: [this.generateId()],
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            age: ['', Validators.required],
        });
    }

    ngOnInit() {}

    onSubmit(form) {
        console.log("add-item", form.value);
    }

    onAdd() {
        this.addData.emit(this.userForm.value)
        console.log("add-item", this.userForm.value);
        // this.studentsService.addStudent(this.userForm.value)
        this.userForm.reset()
        this.userForm.patchValue({
              'id': this.generateId(),
              'name': '' ,
              'lastname': '',
              'age': ''
          });
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
