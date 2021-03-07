import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ItemsService } from '../service/items.service';


@Component({
    selector: 'items-deliver',
    templateUrl: './items-deliver.component.html',
    styleUrls: ['./items-deliver.component.scss']
})

export class ItemsDeliverComponent implements OnInit {

    products: Product[];

    constructor(private productService: ItemsService) {
    }

    ngOnInit() {
        this.products = this.productService.getProduct()
        console.log('items-detliver:', this.products);
    }

    onAdd(event) {
        this.productService.addStudent(event)
        console.log("items-deliver", event);

    }

    onRemove(event) {
        this.productService.removeStudent(event)
        this.products = this.products.filter(item => {
            console.log(item.id, event.id);
            return item.id !== event.id
        })
        console.log(' items-deliver', event);
    }
}