import { Component, Input } from '@angular/core';
import { Students } from '../../models/students.model';

@Component({
    selector: 'app-studentDetail',
    templateUrl: './studentDetail.component.html',
    styleUrls: ['./studentDetail.component.scss']
})

export class StudentDetailComponent {

    @Input() detail: Students;

    editing: boolean = false

    onNameChange(value: string) {
        console.log('value', value);
    }
    toggleEdit() {
        this.editing = !this.editing;
    }
}