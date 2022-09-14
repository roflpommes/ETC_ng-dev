import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  @Output() addFood = new EventEmitter<FoodItem>();

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    const id = Math.random()
    const testFood: FoodItem = {
      id: id,
      name: "Test Food1",
      price: 10,
      calories: -4
    }

    this.addFood.emit(testFood);
  }

}
