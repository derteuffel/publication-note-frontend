import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteProfileComponent } from './compte-profile.component';

describe('CompteProfileComponent', () => {
  let component: CompteProfileComponent;
  let fixture: ComponentFixture<CompteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
