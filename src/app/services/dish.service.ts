import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getDishes() : Dish[] {
    return DISHES;
  }

  getDish(id: number): Dish {
    return DISHES.filter((a) => (a.id === id))[0];
  }
  
  getFeaturedDish() : Dish {
      return DISHES.filter((a) => (a.featured))[0];
  }

}
