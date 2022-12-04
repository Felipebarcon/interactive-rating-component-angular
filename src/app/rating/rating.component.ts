import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit, OnDestroy {
  public message: string;
  subscription: Subscription;

  constructor(private router: Router, private data: DataService) {}

  onChange(e: any) {
    this.data.changeMessage(e.target.value);
  }

  goToThankYouMessage(): void {
    this.router.navigate(['/validation']);
  }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
