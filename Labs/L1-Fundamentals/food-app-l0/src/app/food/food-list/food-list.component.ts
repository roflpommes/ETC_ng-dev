import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  @Input() foodList: FoodItem[];
  @Output() foodSelected = new EventEmitter<FoodItem>();

  ngOnInit(): void {
  }

  deleteFood(f: FoodItem) {

    let newFoodArray: FoodItem[] = [];

    for (let i = 0; i < this.foodList.length; i++) {
      if (this.foodList[i].id != f.id) {
        newFoodArray.push(this.foodList[i]);
      }
    }

    this.foodList = newFoodArray;

  }

  selectFood(f: FoodItem) {
    this.foodSelected.emit(f);
  }

}
