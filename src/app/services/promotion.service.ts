import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }


  getFeaturedPromotion(): Promise<Promotion> {
    var promotion = PROMOTIONS.filter(promotion => promotion.featured === true)[0];

    return new Promise(resolve => {
      setTimeout(() => resolve(promotion), 2000)});
  }

}
