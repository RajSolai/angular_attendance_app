import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRulesMangementComponent } from './payment-rules-mangement.component';

describe('PaymentRulesMangementComponent', () => {
  let component: PaymentRulesMangementComponent;
  let fixture: ComponentFixture<PaymentRulesMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRulesMangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentRulesMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
