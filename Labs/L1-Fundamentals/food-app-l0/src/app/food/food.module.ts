import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FormsModule } from '@angular/forms';
import { FoodRoutingModule } from './food-routing.module';

@NgModule({
  declarations: [
    FoodContainerComponent,
    FoodEditComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
