import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsDeliverComponent } from './items-deliver/items-deliver.component';
import { ListComponent } from './list-items/list.component';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { StudentsService } from './service/students.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { AddFormComponent } from './add-form/add-form.component';

// Routing
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ItemsDeliverComponent },
  { path: 'add', component: AddFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsDeliverComponent,
    ListComponent,
    AddItemComponent,
    HomeComponent,
    AddFormComponent
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
