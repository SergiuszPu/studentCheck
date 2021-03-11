import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../service/subjects.service';
import { Subject } from '../../models/subject.model';
import { ActivatedRoute, Router} from '@angular/router';
import { Col } from '../../models/col.model';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-subject.component.html',
  // styleUrls: ['./edit-student.component.scss']
})

export class EditSubjectComponent implements OnInit {

  subjectsList: Subject[];
  subjectId: string | number = this.route.snapshot.params.id;
  editSubject: Subject[];
  columns: Col[];

  constructor( private subjectsService: SubjectsService,
               private route: ActivatedRoute,
               private router: Router) {}

  ngOnInit(): void {
    this.subjectsList = this.subjectsService.getSubjectsList();

    this.editSubject = this.subjectsList.filter((subject: Subject) => {
      if (subject.id ===  this.subjectId) {
        return subject;
      }
      this.columns = [
        { fieldName: 'id', header: 'ID' },
        { fieldName: 'subject', header: 'Subject' },
        { fieldName: 'result', header: 'Result' },
      ];
    });
  }

  onEditSubject(event): void {
    this.subjectsService.editSubject(event);
    console.log(event);
    this.router.navigate(['/subject-list', event], {relativeTo: this.route});
  }
}
