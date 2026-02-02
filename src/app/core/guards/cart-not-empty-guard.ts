import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { CardService } from '../../cart/services/card.service';
import { Router } from '@angular/router';

export const cartNotEmptyGuard: CanMatchFn = () => {
  const cartService = inject(CardService);
  const router = inject(Router);

  console.log(cartService.hasItems());
  
  if (!cartService.hasItems()) {
    console.log("No hay items en el carrito");
    return router.createUrlTree(['/products']);
  }

  return true;
};


