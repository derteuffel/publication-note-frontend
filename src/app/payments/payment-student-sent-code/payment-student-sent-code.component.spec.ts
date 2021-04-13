import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStudentSentCodeComponent } from './payment-student-sent-code.component';

describe('PaymentStudentSentCodeComponent', () => {
  let component: PaymentStudentSentCodeComponent;
  let fixture: ComponentFixture<PaymentStudentSentCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStudentSentCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStudentSentCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
