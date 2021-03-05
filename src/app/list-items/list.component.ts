import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ItemsService } from '../service/items.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    @Input() detail: Product[];

    editing: boolean = false
    added: boolean = false

    cols: any[];
    userForm: FormGroup;

    constructor(private productService: ItemsService, private fb: FormBuilder) {
        this.userForm = this.fb.group({
            id: [''],
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            age: ['', Validators.required],
        });
    }

    ngOnInit() {


        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Name' },
            { field: 'lastname', header: 'Lastname' },
            { field: 'age', header: 'Age' }
        ];
    }

    // toggleEdit() {
    //     this.editing = !this.editing;
    // }

    // addstudent() {
    //     this.added = !this.added
    // }

    onRemove(event) {
        this.productService.removeStudent(event)
        this.detail = this.detail.filter(item => {
            console.log(item.id, event.id);
            return item.id !== event.id
        })
        console.log(' componennt.ts', event.id);
    }

    editObject = []

    handleEdit(event: Product) {
        console.log(event);
        this.editObject.push(event)
        // this.productService.editItem(event)
    }

    pushEdit(event) {
        this.productService.editItem(event)
        console.log(event);
        // this.userForm.reset()
        // this.detail = this.detail.map((item: Product) => {
        //     if (item.id === event.id) {
        //         item = Object.assign({}, item, event)
        //     }
        //     return item
        // })
        this.editing = !this.editing
    }
}