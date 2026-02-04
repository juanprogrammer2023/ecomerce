import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { CardService } from '../../../cart/services/card.service';
import { InvoiceItem } from '../../adapters/product.adapter.adapter';
import { CustomerModel } from '../../models/customer-model.model';

@Component({
  selector: 'app-billing-page',
  standalone:false,
  templateUrl: './billing-page.html',
  styleUrl: './billing-page.css',
})
export class BillingPage {

  cardService = inject(CardService);

  emitInvoiceItems(products:InvoiceItem[]){
    console.log(products);
  }
    
  emitCustomer(customer:CustomerModel){
    console.log(typeof customer.dv);
  }
}
