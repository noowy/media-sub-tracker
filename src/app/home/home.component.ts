import { Component, OnInit } from '@angular/core';
import { Subscription } from '../common/subscription';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscriptions!: Subscription[];

  constructor(private subService: SubscriptionService) { }

  ngOnInit(): void {
    this.subscriptions = this.subService.getSubs();
  }

}
