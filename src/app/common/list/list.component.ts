import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Base } from '../../models/base.model';
import { Col } from '../../models/col.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  @Input() detail: Base[];
  @Input() cols: Col[];
  @Output() removeData: EventEmitter<Base> = new EventEmitter();
  @Output() editData: EventEmitter<Base> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEdit(id): void {
    this.editData.emit(id);
  }

  onRemove(event): void {
    this.removeData.emit(event);
  }
}
