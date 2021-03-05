import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ItemsService } from '../service/items.service';

@Component({
    selector: 'app-itemsDeliver',
    templateUrl: './items-deliver.component.html',
    styleUrls: ['./items-deliver.component.scss']
})

export class ItemsDeliverComponent implements OnInit {

    products: Product[];

    constructor(private productService: ItemsService) { }

    ngOnInit() {
        // this.productService.getProductsSmall().then(data => this.products = data);
        this.products = this.productService.getProducts
    } 
}