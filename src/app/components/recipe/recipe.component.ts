import { Component, OnInit, OnChanges, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

import { RecipeModel } from '../../models/recipe.model';
import { StockModel } from '../../models/stock.model';
import { IngredientModel } from '../../models/ingredient.model';
import { ShoppingListModel } from '../../models/shopping-list.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnChanges {

  @Input()
  recipe: RecipeModel;

  @Input()
  stocks: StockModel[];

  @Input()
  shoppingList: ShoppingListModel;

  @Output()
  addedIngredient = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkIngredients();
  }

  checkIngredients() {
    this.recipe.ingredients.forEach(ingredient => {
      let alimentStock = this.stocks.find(x => x.aliment.id == ingredient.aliment.id);

      let alimentShoppingList = this.shoppingList.ingredients.find(x => x.aliment.id == ingredient.aliment.id);

      if (alimentStock && alimentStock.quantity >= ingredient.quantity) {
        ingredient.isInStock = true;
      }

      if (alimentShoppingList && alimentShoppingList.quantity >= ingredient.quantity) {
        ingredient.isInShoppingList = true;
      }
    });
  }

  addIngredientToShoppingList(ingredient: IngredientModel) {
    this.addedIngredient.emit(ingredient);
    this.checkIngredients();
  }

}
