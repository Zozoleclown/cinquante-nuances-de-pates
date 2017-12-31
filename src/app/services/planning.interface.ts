import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';
import { PlanningModel } from '../models/planning.model';

export interface IPlanningService {
  getPlanningForDate(date: Date) : Observable<PlanningModel[]>;
}