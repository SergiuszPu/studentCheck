import { Product } from "../models/product.model";
import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
    constructor() { }

    getProducts: Product[] = [
        {
            id: '1',
            name: 'Sergiusz',
            lastname: 'Pu',
            age: '35'
        }, {
            id: '2',
            name: 'Łukasz',
            lastname: 'Kmiecik',
            age: '45'
        }, {
            id: '3',
            name: 'Hania',
            lastname: 'Zdym',
            age: '23'
        }, {
            id: '4',
            name: 'Karol',
            lastname: 'Sur',
            age: '23'
        }, {
            id: '5',
            name: 'Agata',
            lastname: 'Perl',
            age: '23'
        }
    ]

    // getProducts(): Product[] {
    //     return [{
    //         id: '1',
    //         name: 'Sergiusz',
    //         lastname: 'Pu',
    //         age: '35'
    //     }, {
    //         id: '2',
    //         name: 'Łukasz',
    //         lastname: 'Kmiecik',
    //         age: '45'
    //     }, {
    //         id: '3',
    //         name: 'Hania',
    //         lastname: 'Zdym',
    //         age: '23'
    //     }, {
    //         id: '4',
    //         name: 'Karol',
    //         lastname: 'Sur',
    //         age: '23'
    //     }, {
    //         id: '5',
    //         name: 'Agata',
    //         lastname: 'Perl',
    //         age: '23'
    //     }
    // ]}


    getProduct() {
        return this.getProducts
    }

    addStudent(item) {
        this.getProducts.push(item)
        console.log(this.getProducts);
    }

    removeStudent(event) {
        this.getProducts = this.getProducts.filter(item => {
            console.log(item.id, event.id);
            return item.id !== event.id
        })
        console.log('get products:', this.getProducts);
    }

    editItem(event: Product) {
        this.getProducts= this.getProducts.map((item: Product) => {
            if (item.id === event.id) {
                item = Object.assign({}, item, event)
            }
            return item
        })
        console.log("seervice:",this.getProducts);
    }
}