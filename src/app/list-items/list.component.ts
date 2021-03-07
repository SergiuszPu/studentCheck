import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { ItemsService } from '../service/items.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    @Input() detail: Product[];
    @Output() removeData: EventEmitter<Product[]> = new EventEmitter()

    productsData: Product[];

    editing: boolean = false
    added: boolean = false

    cols: any[];
    userForm: FormGroup;

    constructor(private productService: ItemsService, private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router) {
        this.userForm = this.fb.group({
            id: [''],
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            age: ['', Validators.required],
        });

    }

    ngOnInit() {
        console.log('List',this.detail);
        this.productsData = this.detail
        
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Name' },
            { field: 'lastname', header: 'Lastname' },
            { field: 'age', header: 'Age' }
        ];
    }

    onEditRecipe() {
        this.router.navigate(['add'], {relativeTo: this.route});
      }

    // toggleEdit() {
    //     this.editing = !this.editing;
    // }

    // addstudent() {
    //     this.added = !this.added
    // }

    onRemove(event) {
        this.removeData.emit(event)
        console.log("list: ",event);
        
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