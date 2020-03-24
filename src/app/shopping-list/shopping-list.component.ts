import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modul';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Lemon", 4, "pcs"),
    new Ingredient("Orange", 1.5, "kg")
  ];
  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdded = (ingredient: { name: string, amount: number, unit: string }) => {
    this.ingredients.push(ingredient)
  }
}
