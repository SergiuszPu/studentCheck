import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsDeliverComponent } from './items-deliver/items-deliver.component';
import { ListComponent } from './list-items/list.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ItemsService } from './service/items.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOItemComponent } from './add-item/add-item.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ItemsDeliverComponent,
    ListComponent,
    AddOItemComponent
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
    CommonModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
