import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingItemsSummary } from './components/billing-items-summary/billing-items-summary';
import { BillingCustomerForm } from './components/billing-customer-form/billing-customer-form';
import { BillingPage } from './pages/billing-page/billing-page';
import { BillingRoutingModule } from './billing.routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [BillingItemsSummary,BillingCustomerForm,BillingPage],
  imports: [
    CommonModule,
    BillingRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports:[BillingItemsSummary,BillingCustomerForm,BillingPage]
})
export class BillingModule { }
