import { Component, OnInit } from '@angular/core';
import { Students } from '../../models/students.model';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {

    students: Students[];

    constructor() {}

    ngOnInit() {
        console.log('ngOninit');
        this.students = [{
            id: 1,
            name: 'Sergiusz',
            subject: 'Math',
            checkedIn: true
        }, {
            id: 2,
            name: 'Łukasz',
            subject: ' Psychology',
            checkedIn: true
        }, {
            id: 3,
            name: 'Hania',
            subject: 'Math',
            checkedIn: false
        }, {
            id: 4,
            name: 'Karol',
            subject: 'Psychology',
            checkedIn: true
        }, {
            id: 5,
            name: 'Agata',
            subject: 'Math',
            checkedIn: false
        }
        ]
    }

}