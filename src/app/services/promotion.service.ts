import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/delay';

import 'rxjs/add/observable/of';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: number): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }


  getFeaturedPromotion(): Observable<Promotion> {
    var promotion = PROMOTIONS.filter(promotion => promotion.featured === true)[0];

    return Observable.of(promotion).delay(2000);
  }

}
