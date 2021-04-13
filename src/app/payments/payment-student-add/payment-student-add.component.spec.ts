import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStudentAddComponent } from './payment-student-add.component';

describe('PaymentStudentAddComponent', () => {
  let component: PaymentStudentAddComponent;
  let fixture: ComponentFixture<PaymentStudentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStudentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStudentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
