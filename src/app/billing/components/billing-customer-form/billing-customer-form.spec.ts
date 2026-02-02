import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingCustomerForm } from './billing-customer-form';

describe('BillingCustomerForm', () => {
  let component: BillingCustomerForm;
  let fixture: ComponentFixture<BillingCustomerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingCustomerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingCustomerForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
