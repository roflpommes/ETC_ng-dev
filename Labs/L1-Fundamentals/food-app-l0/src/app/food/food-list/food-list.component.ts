import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit, OnChanges {

  constructor() { }

  tableDataSource: MatTableDataSource<FoodItem>;
  displayedColumns = ["ID", "Name", "Price", "Calories", "delete", "select"];
  showAdd = false;

  saveFood: FoodItem;

  @Input() foodList: FoodItem[];
  @Output() foodSelected = new EventEmitter<FoodItem>();
  @Output() foodToAdd = new EventEmitter<FoodItem>();
  @Output() foodToDelete = new EventEmitter<FoodItem>();


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tableDataSource = new MatTableDataSource(this.foodList);
  }

  toogleAddVisibility() {
    this.showAdd = !this.showAdd;
  }

  onFoodAdd(f: FoodItem) {
    this.foodToAdd.emit(f);
  }

  deleteFood(f: FoodItem) {
    this.foodToDelete.emit(f);
  }

  selectFood(f: FoodItem) {
    this.foodSelected.emit(f);
  }

}
