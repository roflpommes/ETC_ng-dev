import { Component, OnChanges, OnInit } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {

  foodListContainer: FoodItem[];
  current: FoodItem | null;
  loading = false;
  hideEdit = true;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getFood().subscribe(data => {
      this.foodListContainer = data;
    })
  }

  closeEdit() {
    this.hideEdit = true;
  }

  onFoodSelected(f: FoodItem) {
    this.hideEdit = false;
    this.current = { ...f };
  }

  onFoodAdd(f: FoodItem) {
    console.log('Adding to Service', f);
    this.foodService.addFood(f).subscribe((response: FoodItem) => {
      let temp = [... this.foodListContainer]
      temp.push(f);
      this.foodListContainer = temp;

    })
  }

  onFoodDelete(f: FoodItem) {
    console.log("Deleting food item with id ", f.id);
    this.foodService.deleteFood(f.id).subscribe(() => {
      let deleted = this.foodListContainer.filter((item) => item.id != f.id);
      this.foodListContainer = [...deleted];
      //this.current = null;
    })
  }

  onFoodSaved(f: FoodItem) {
    console.log('Saving to Service', f);

    this.foodService.updateFood(f).subscribe((response: FoodItem) => {
      this.loading = false;
      const existingFood: FoodItem | undefined = this.foodListContainer.find((food) => food.id == f.id)
      if (existingFood) {
        Object.assign(existingFood, response);
        this.foodListContainer = [...this.foodListContainer];
      }
    })
  }

}
