import { Component, WritableSignal, signal } from '@angular/core';
import { InvoiceItem } from '../../adapters/product.adapter.adapter';
import { CardService } from '../../../cart/services/card.service';
import { inject } from '@angular/core';
import { Product } from '../../../products/models/product.model';
import { ProductAdapter } from '../../adapters/product.adapter.adapter';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-billing-items-summary',
  standalone:false,
  templateUrl: './billing-items-summary.html',
  styleUrl: './billing-items-summary.css',
})
export class BillingItemsSummary {

      cardService = inject(CardService);
      invoiceItems: WritableSignal<InvoiceItem[]> = signal([]);
      products$ = this.cardService.getCartItems();
      productAdapter = new ProductAdapter();
      
  
      ngOnInit(): void { 
        this.products$.subscribe(products => {
          this.invoiceItems.set(this.maperProductsToInvoiceItems(products));
        });
      }

      maperProductsToInvoiceItems(products: Product[]): InvoiceItem[] {
        return products.map((product) => this.productAdapter.transformToInvoiceItem(product));
      }

      getSubtotal(): number {
        return this.invoiceItems().reduce((total, item) => total + (item.price * item.quantity), 0);
      }

      getTax(): number {
        return this.getSubtotal() * 0.19;
      }

      getTotal(): number {
        return this.getSubtotal() + this.getTax();
      }

      confirmOrder() {
        // Lógica para confirmar el pedido
        console.log('Pedido confirmado:', this.invoiceItems());
      }
}
