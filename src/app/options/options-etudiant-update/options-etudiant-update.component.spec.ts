import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsEtudiantUpdateComponent } from './options-etudiant-update.component';

describe('OptionsEtudiantUpdateComponent', () => {
  let component: OptionsEtudiantUpdateComponent;
  let fixture: ComponentFixture<OptionsEtudiantUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsEtudiantUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsEtudiantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
