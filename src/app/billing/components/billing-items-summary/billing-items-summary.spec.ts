import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingItemsSummary } from './billing-items-summary';

describe('BillingItemsSummary', () => {
  let component: BillingItemsSummary;
  let fixture: ComponentFixture<BillingItemsSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingItemsSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingItemsSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
