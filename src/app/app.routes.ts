import { Routes } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { ValidationComponent } from './validation/validation.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'rating',
    pathMatch: 'full',
  },
  {
    path: 'rating',
    component: RatingComponent,
  },
  {
    path: 'validation',
    component: ValidationComponent,
  },
];
