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
      firstname: 'Tedd',
      lastname: 'Mall',
      age: '45'
    }, {
      id: '3',
      firstname: 'Michał',
      lastname: 'Kowalski',
      age: '23'
    }, {
      id: '4',
      firstname: 'Karol',
      lastname: 'Sur',
      age: '23'
    }, {
      id: '5',
      firstname: 'Agata',
      lastname: 'Berta',
      age: '23'
    }
  ];

  getStudentsList(): Student[] {
    return this.getStudents;
  }

  addStudent(item): void {
    for (const el in item) {
      if (el === 'id') {
        item.id = this.getStudents.length + 1 + '';
        // item.id = this.generateId();
        this.getStudents.push(item);
      }
    }
  }

  removeStudent(event): void {
    this.getStudents = this.getStudents.filter(item => {
      return item.id !== event.id;
    });
  }

  editStudent(event: Student): void {
    this.getStudents = this.getStudents.map((item: Student) => {
      if (item.id === event.id) {
        item = Object.assign({}, item, event);
      }
      return item;
    });
  }

  // generateId(): string {
  //   let text = '';
  //   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (let i = 0; i < 2; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }
  //   return text;
  // }
}
