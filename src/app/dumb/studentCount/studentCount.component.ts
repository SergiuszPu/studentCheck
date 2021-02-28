import { Component, Input } from '@angular/core';
import { Students } from 'src/app/models/students.model';

@Component({
    selector: 'app-studentCount',
    templateUrl: './studentCount.component.html',
    styleUrls: ['./studentCount.component.scss'],
})

export class StudentCountComponent {

    @Input() items: Students[];

    checkIn(): number {
        if (!this.items) return;
        return this.items.filter((student: Students) => {
            return student.checkedIn;
        }).length
    }
}