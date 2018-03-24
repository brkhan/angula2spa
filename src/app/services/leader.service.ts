import { Injectable } from '@angular/core';

import {Leader } from '../shared/leader'
import {LEADERS } from '../shared/leaders'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/delay';

import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

 
  constructor() { }

  getLeaders() : Leader[] {
    return LEADERS;
  } 

  getFeaturedLeader(): Observable<Leader> {
    return Observable.of(LEADERS[0]).delay(2000);
  }

}
