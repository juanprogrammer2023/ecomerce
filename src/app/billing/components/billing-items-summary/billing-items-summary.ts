import { Component, WritableSignal, signal } from '@angular/core';
import { InvoiceItem } from '../../adapters/product.adapter.adapter';
import { CardService } from '../../../cart/services/card.service';
import { inject } from '@angular/core';
import { Product } from '../../../products/models/product.model';
import { ProductAdapter } from '../../adapters/product.adapter.adapter';


@Component({
  selector: 'app-billing-items-summary',
  standalone:false,
  templateUrl: './billing-items-summary.html',
  styleUrl: './billing-items-summary.css',
})
export class BillingItemsSummary {

      cardService = inject(CardService);
      productAdapter = inject(ProductAdapter);
      invoiceItems = signal<InvoiceItem[]>([]);
      products$ = this.cardService.getCartItems();
      
  
      ngOnInit(): void { 
        this.products$.subscribe(products => {
          this.invoiceItems.set(this.maperProductsToInvoiceItems(products));
        });
      }

      maperProductsToInvoiceItems(products: Product[]): InvoiceItem[] {
        return products.map((product) => this.productAdapter.transformToInvoiceItem(product));
      }
}
