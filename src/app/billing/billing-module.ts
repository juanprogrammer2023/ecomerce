import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingItemsSummary } from './components/billing-items-summary/billing-items-summary';
import { BillingCustomerForm } from './components/billing-customer-form/billing-customer-form';
import { BillingPage } from './pages/billing-page/billing-page';
import { BillingRoutingModule } from './billing.routing.module';

@NgModule({
  declarations: [BillingItemsSummary,BillingCustomerForm,BillingPage],
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  exports:[BillingItemsSummary,BillingCustomerForm,BillingPage]
})
export class BillingModule { }
