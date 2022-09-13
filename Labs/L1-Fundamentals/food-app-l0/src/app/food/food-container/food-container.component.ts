import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {

  foodList: FoodItem[];
  current: FoodItem;
  close: boolean = false;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getFood().subscribe(data => {
      this.foodList = data;
    })
  }

  onFoodSelected(f: FoodItem) {
    this.current = { ...f };
  }

  onFoodSaved(f: FoodItem) {
    console.log('Saving to Service', f);
    const existingFood: FoodItem | undefined = this.foodList.find((food) => food.id == f.id)
    if (existingFood) {
      Object.assign(existingFood, f);
    }

    console.log('FoodList after save', this.foodList);
  }

}
