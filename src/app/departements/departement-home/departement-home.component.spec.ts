import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementHomeComponent } from './departement-home.component';

describe('DepartementHomeComponent', () => {
  let component: DepartementHomeComponent;
  let fixture: ComponentFixture<DepartementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
