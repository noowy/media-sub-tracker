import { Injectable } from '@angular/core';
import { Subscription } from '../common/subscription';

import { SUBSCRIPTIONS } from '../common/subscriptions';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }

  getSubs(): Subscription[] {
    return SUBSCRIPTIONS;
  }
}
