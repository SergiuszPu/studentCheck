import { Student } from '../models/student.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  constructor() { }

  getStudents: Student[] = [
    {
      id: '1',
      firstname: 'Sergiusz',
      lastname: 'Pu',
      age: '35'
    }, {
      id: '2',
      firstname: 'Łukasz',
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

  getStudentList() {
    return this.getStudents;
  }

  addStudent(item) {
    this.getStudents.push(item);
    console.log(this.getStudents);
  }

  removeStudent(event) {
    this.getStudents = this.getStudents.filter(item => {
      console.log(item.id, event.id);
      return item.id !== event.id;
    })
    console.log('get products:', this.getStudents);
  }

  editStudent(event: Student) {
    this.getStudents = this.getStudents.map((item: Student) => {
      if (item.id === event.id) {
        item = Object.assign({}, item, event);
      }
      return item;
    });
    console.log("seervice: ", this.getStudents);
  }


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

}
