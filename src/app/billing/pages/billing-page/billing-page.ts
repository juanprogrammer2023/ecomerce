import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { CardService } from '../../../cart/services/card.service';

@Component({
  selector: 'app-billing-page',
  standalone:false,
  templateUrl: './billing-page.html',
  styleUrl: './billing-page.css',
})
export class BillingPage {

  cardService = inject(CardService);
    



}
