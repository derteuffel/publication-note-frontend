import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStudentDetailComponent } from './payment-student-detail.component';

describe('PaymentStudentDetailComponent', () => {
  let component: PaymentStudentDetailComponent;
  let fixture: ComponentFixture<PaymentStudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStudentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
