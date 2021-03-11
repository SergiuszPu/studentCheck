import { Subject} from '../models/subject.model';

export class SubjectsService {
  constructor() {}

  getSubjects: Subject[] = [
    {
      id: '1',
      subject: 'Math',
      result: '4',
    }, {
      id: '2',
      subject: 'English',
      result: '4',
    }, {
      id: '3',
      subject: 'History ',
      result: '3',
    }
  ];

  getSubjectsList(): Subject[] {
    return this.getSubjects;
  }

  addSubject(item): void {
    for (const el in item) {
      if (el === 'id') {
        item.id = this.getSubjects.length + 1 + '';
        // item.id = this.generateId();
        this.getSubjects.push(item);
      }
    }
  }

  removeSubject(event): void {
    this.getSubjects = this.getSubjects.filter(item => {
      return item.id !== event.id;
    });
  }

  editSubject(event: Subject): void {
    this.getSubjects = this.getSubjects.map((item: Subject) => {
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
