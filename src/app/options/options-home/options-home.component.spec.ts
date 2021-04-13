import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsHomeComponent } from './options-home.component';

describe('OptionsHomeComponent', () => {
  let component: OptionsHomeComponent;
  let fixture: ComponentFixture<OptionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
