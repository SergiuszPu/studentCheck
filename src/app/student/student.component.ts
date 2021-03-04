import { Component, OnInit } from '@angular/core';
import { Students } from '../models/students.model';
import { ItemsService } from '../service/items.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {

    students: Students[];

    constructor(private items: ItemsService) { }

    ngOnInit() {
        this.students = this.items.getStudents()
    }

}