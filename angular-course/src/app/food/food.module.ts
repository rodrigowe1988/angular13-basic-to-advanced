import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFoodComponentsComponent } from './all-food-components/all-food-components.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    AllFoodComponentsComponent,
    FoodAddComponent,
    FoodListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoodModule { }
