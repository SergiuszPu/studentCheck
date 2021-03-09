import { Student } from '../models/student.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {
  constructor() {}

  getStudents: Student[] = [
    {
      id: '1',
      firstname: 'Sergiusz',
      lastname: 'Pu',
      age: '35'
    }, {
      id: '2',
      firstname: 'Lukasz',
      lastname: 'Kmiecik',
      age: '45'
    }, {
      id: '3',
      firstname: 'Hania',
      lastname: 'Zdym',
      age: '23'
    }, {
      id: '4',
      firstname: 'Karol',
      lastname: 'Sur',
      age: '23'
    }, {
      id: '5',
      firstname: 'Agata',
      lastname: 'Perl',
      age: '23'
    }
  ];

  getStudentsList(): Student[] {
    return this.getStudents;
  }

  addStudent(item): void {
    this.getStudents.push(item);
    // console.log(this.getStudents);
  }

  removeStudent(event): void {
    this.getStudents = this.getStudents.filter(item => {
      return item.id !== event.id;
    });
    // console.log('get products:', this.getStudents);
  }

  editStudent(event: Student): void {
    this.getStudents = this.getStudents.map((item: Student) => {
      if (item.id === event.id) {
        item = Object.assign({}, item, event);
      }
      return item;
    });
    // console.log('service: ', this.getStudents);
  }

  pullEditStudent(id): any {
    this.getStudents.filter((student: Student) => {
      if (student.id === id) {
        console.log('pullEditStudent: ', student);
        return student;
      }
    });
  }

}
