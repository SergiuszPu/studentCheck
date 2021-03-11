import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../../service/subjects.service';
import { Subject } from '../../models/subject.model';
import { Col } from '../../models/col.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  // styleUrls: ['./add-subject.component.scss']
})

export class AddSubjectComponent implements OnInit {

  subjectsList: Subject[];
  columns: Col[];

  constructor( private subjectsService: SubjectsService,
               private route: ActivatedRoute,
               private router: Router) {
  }

  ngOnInit(): void {
    this.subjectsList = this.subjectsService.getSubjectsList();
    this.columns = [
      { fieldName: 'id', header: 'ID' },
      { fieldName: 'subject', header: 'Subject' },
      { fieldName: 'result', header: 'Result' },
    ];
  }

  AddNewSubject(data): void {
    this.subjectsService.addSubject(data);
    this.router.navigate(['/subject-list'], {relativeTo: this.route});
  }
}
