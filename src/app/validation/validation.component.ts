import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;
  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  redirectToMain(): void {
    this.router.navigate(['/rating']);
  }
}
