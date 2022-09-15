import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  @Input() selectedFood: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output() hideEdit: EventEmitter<boolean> = new EventEmitter<boolean>();

  foodForm: FormGroup;

  constructor(private fb: UntypedFormBuilder) {
    this.foodForm = this.fb.group({
      id: [0],
      name: ['', [Validators.minLength(3), Validators.required]],
      price: [0.1, [Validators.min(0.1), Validators.required]],
      calories: [0, Validators.required]
    })
  }

  get name() {
    return this.foodForm.get('name');
  }

  get price() {
    return this.foodForm.get('price');
  }

  get calories() {
    return this.foodForm.get('calories');
  }

  ngOnInit(): void {
    this.foodForm.patchValue(this.selectedFood);
  }

  saveChanges() {
    //this.saveFood.emit(this.selectedFood);
    if (this.foodForm.valid) {
      this.saveFood.emit(this.foodForm.value);
    }

  }

  closeEdit() {
    this.hideEdit.emit(true);
  }


}
