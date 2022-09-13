import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  @Input() selectedFood: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges() {
    this.saveFood.emit(this.selectedFood);
  }


}
