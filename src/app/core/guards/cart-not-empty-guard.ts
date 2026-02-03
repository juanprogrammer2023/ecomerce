import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { CardService } from '../../cart/services/card.service';
import { Router } from '@angular/router';

export const cartNotEmptyGuard: CanMatchFn = () => {
  const cartService = inject(CardService);
  const router = inject(Router);
  
  if (!cartService.hasItems()) {
    return router.createUrlTree(['/products']);
  }

  return true;
};


