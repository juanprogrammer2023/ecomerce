import { Component,
  OnInit, 
  WritableSignal, 
  signal,
  inject 
} from '@angular/core';
import { CardService } from '../../services/card.service';
import { Observable } from 'rxjs';
import { Product } from '../../../products/models/product.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cart-component',
  standalone:false,
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent implements OnInit {

  cardService= inject(CardService);
  cartItems: Observable<Product[]> = this.cardService.getCartItems()
  items: WritableSignal<Product[]> = signal([])
  router = inject(Router);

  ngOnInit() {
    this.cartItems.subscribe(items => {
      this.items.set(items);
    });
  }

  generateInvoice() {
    this.router.navigate(['/billing']);
  }

  getTotalPrice(): number {
    return this.items().reduce((total, product) => total + (product.price || 0), 0);
  }

  clearCart() {
    this.cardService.clearCart();
  }

}
