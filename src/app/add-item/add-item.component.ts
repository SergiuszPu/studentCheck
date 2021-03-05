import { Component } from '@angular/core';
import { ItemsService } from '../service/items.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})

export class AddOItemComponent {

    userForm: FormGroup;
    
    constructor(private studentsService: ItemsService, private fb: FormBuilder) {
        this.userForm = this.fb.group({
            id: [this.generateId()],
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            age: ['', Validators.required],
        });
    }
    
    onAdd() {
        this.studentsService.addStudent(this.userForm.value)
        this.userForm.reset()
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}