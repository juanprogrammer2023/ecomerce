import { Component, inject } from '@angular/core';
import { Product } from '../../../products/models/product.model';
import { input } from '@angular/core';
import { CardService } from '../../services/card.service';


@Component({
  selector: 'app-cart-item-component',
  standalone: false,
  templateUrl: './cart-item-component.html',
  styleUrl: './cart-item-component.css',
})
export class CartItemComponent {
  private cardService = inject(CardService);

  product = input<Product>();

  removeFromCart() {
    this.cardService.removeFromCart(this.product()!);
  }
}
