import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Students } from '../models/students.model';
import { ItemsService } from '../service/items.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-studentDetail',
    templateUrl: './studentDetail.component.html',
    styleUrls: ['./studentDetail.component.scss']
})

export class StudentDetailComponent implements OnInit {

    @Input() detail: Students[];

    editing: boolean = false
    added: boolean = false

    userForm: FormGroup;

    constructor(private studentsService: ItemsService, private fb: FormBuilder) {
        this.userForm = this.fb.group({
            id: [''],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            age: ['', Validators.required],
        });
    }

    ngOnInit() { }

    toggleEdit() {
        this.editing = !this.editing;
    }

    addstudent() {
        this.added = !this.added
    }

    onRemove(event) {
        this.studentsService.removeStudent(event)
        this.detail = this.detail.filter(item => {
            console.log(item.id, event.id);
            return item.id !== event.id
        })
        console.log(' componennt.ts', event);
    }

    onAdd() {
        this.studentsService.addStudent(this.userForm.value)
        this.userForm.reset()
    }

    handleEdit(event: Students) { 
        this.studentsService.editItem(event)
        this.editing = !this.editing
    }
}