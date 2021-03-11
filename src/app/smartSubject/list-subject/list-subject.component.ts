import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/subject.model';
import { SubjectsService } from '../../service/subjects.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Col } from '../../models/col.model';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
})

export class ListSubjectComponent implements OnInit {

  subjects: Subject[];
  columns: Col[];
  editSubject: Subject[];

  constructor(private subjectsService: SubjectsService, private route: ActivatedRoute, private router: Router) {
  }

  onEditSubject(id): void {
    this.router.navigate(['/subject/edit', id], {relativeTo: this.route});
  }

  onRemove(event): void {
    this.subjectsService.removeSubject(event);
    this.subjects = this.subjects.filter(item => {
      return item.id !== event.id;
    });
  }

  ngOnInit(): void {
    this.subjects = this.subjectsService.getSubjectsList();

    this.columns = [
      { fieldName: 'id', header: 'ID' },
      { fieldName: 'subject', header: 'Subject' },
      { fieldName: 'result', header: 'Result' },
    ];
  }
}
