import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './smart/student/student.component';
import { StudentCountComponent } from './dumb/studentCount/studentCount.component';
import { StudentDetailComponent } from './dumb/studentDetail/studentDetail.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentCountComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
