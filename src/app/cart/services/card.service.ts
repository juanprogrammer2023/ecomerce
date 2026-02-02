import { Injectable } from "@angular/core";
import { Product } from "../../products/models/product.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {

    private cartItems = new BehaviorSubject<Product[]>([]);

    getCartItems() {
        return this.cartItems.asObservable();
    }

    addToCart(product: Product) {
        const currentItems = this.cartItems.value;
        this.cartItems.next([...currentItems, product]);
    }

    removeFromCart(product: Product) {
        const currentItems = this.cartItems.value;
        this.cartItems.next(currentItems.filter(item => item.id !== product.id));
    }

    hasItems() {
    return this.cartItems.value.length > 0;
  }

  
}