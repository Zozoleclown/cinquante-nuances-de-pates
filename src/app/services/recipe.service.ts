import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRecipeService } from './recipe.interface';
import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService implements IRecipeService {
  
  constructor(
    private _http: HttpClient
  ) { }

  getRecipe(id: string): Observable<RecipeModel> {
    throw new Error("Method not implemented.");
  }
}