import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStudentListComponent } from './payment-student-list.component';

describe('PaymentStudentListComponent', () => {
  let component: PaymentStudentListComponent;
  let fixture: ComponentFixture<PaymentStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
