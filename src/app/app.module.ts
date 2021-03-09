import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './common/list/list.component';
import { ListStudentComponent } from './smartStudent/list-student/list-student.component';
import { AddStudentComponent } from './smartStudent/add-student/add-student.component';
import { EditStudentComponent } from './smartStudent/edit-student/edit-student.component';

import { StudentsService } from './service/students.service';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './common/forms/forms.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';


// Routing
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListStudentComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    ListComponent,
    FormsComponent,
    HomeComponent,
    AddStudentComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MenubarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
