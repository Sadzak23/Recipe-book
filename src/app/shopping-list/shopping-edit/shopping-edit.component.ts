import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: { name: string, amount: number, unit: string }
  @Output() ingredientAdded = new EventEmitter<{
    name: string,
    amount: any,
    unit: string
  }>()
  constructor() { }

  ngOnInit() {
  }
  onAddIngredient = (name: HTMLInputElement, amount: HTMLInputElement, unit: HTMLInputElement) => {
    this.ingredientAdded.emit({
      name: name.value,
      amount: amount.value,
      unit: unit.value
    })
  }
}
