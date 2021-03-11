import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { ListComponent } from './common/list/list.component';
import { ListStudentComponent } from './smartStudent/list-student/list-student.component';
import { AddStudentComponent } from './smartStudent/add-student/add-student.component';
import { EditStudentComponent } from './smartStudent/edit-student/edit-student.component';
import { ListSubjectComponent } from './smartSubject/list-subject/list-subject.component';
import { EditSubjectComponent } from './smartSubject/edit-subject/edit-subject.component';
import { AddSubjectComponent } from './smartSubject/add-subject/add-subject.component';
import { FormsComponent } from './common/forms/forms.component';

// Services
import { StudentsService } from './service/students.service';
import { SubjectsService } from './service/subjects.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student-list', component: ListStudentComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent },
  { path: 'subject-list', component: ListSubjectComponent },
  { path: 'subject/add', component: AddSubjectComponent },
  { path: 'subject/edit/:id', component: EditSubjectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    ListComponent,
    FormsComponent,
    HomeComponent,
    AddStudentComponent,
    EditStudentComponent,
    ListSubjectComponent,
    EditSubjectComponent,
    AddSubjectComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    BrowserAnimationsModule,
    MenubarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentsService, SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
