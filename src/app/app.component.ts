import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  items;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        items: [{
          label: 'Add New',
          items: [
            {label: 'Add Student', routerLink: ['add']},
            {label: 'Add Subject', routerLink: ['subject/add']}
          ]
        },
          {label: 'Home', routerLink: ['home']},
        ]
      },
      {
        label: 'Edit List',
        items: [
          {label: 'Student List', routerLink: ['student-list']},
          {label: 'Subject List', routerLink: ['subject-list']}
        ]
      }
    ];
  }
}
