import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodRoutingModule } from './food-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FoodAddComponent } from './food-add/food-add.component';

@NgModule({
  declarations: [
    FoodContainerComponent,
    FoodEditComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FoodRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class FoodModule { }
