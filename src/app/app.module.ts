import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsDeliverComponent } from './items-deliver/items-deliver.component';
import { ListComponent } from './list-items/list.component';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ItemsService } from './service/items.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';

//Routing
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'add', component: AddItemComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ItemsDeliverComponent,
    ListComponent,
    AddItemComponent,
    HomeComponent
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
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
