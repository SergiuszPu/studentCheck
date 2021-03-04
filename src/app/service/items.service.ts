import { Students } from "../models/students.model";

export class ItemsService {
    constructor() { }

    getItems: Students[] = [{
        id: 1,
        firstname: 'Sergiusz',
        lastname: 'Pu',
        age: 35
    }, {
        id: 2,
        firstname: 'Łukasz',
        lastname: 'Kmiecik',
        age: 22
    }, {
        id: 3,
        firstname: 'Hania',
        lastname: 'Zdym',
        age: 23
    }, {
        id: 4,
        firstname: 'Karol',
        lastname: 'Sur',
        age: 24
    }, {
        id: 5,
        firstname: 'Agata',
        lastname: 'Perl',
        age: 25
    }
    ];

    getStudents() {
        return this.getItems
    }

    addStudent(item) {
        this.getItems.push(item)
        console.log(this.getItems);
    }

    removeStudent(event) {
        // this.getItems.splice(event.id , 1)
        this.getItems = this.getItems.filter(item => {
            console.log(item.firstname, event.firstname);
            return item.firstname !== event.firstname
        })
        console.log(this.getItems);
    }

    editItem(event: Students) {
        this.getItems = this.getItems.map((item: Students) => {
            if (item.id === event.id) {
                item = Object.assign({}, item, event)
            }
            return item
        })
        console.log(this.getItems);
    }
}