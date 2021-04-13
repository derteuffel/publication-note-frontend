import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsEtudiantDetailComponent } from './options-etudiant-detail.component';

describe('OptionsEtudiantDetailComponent', () => {
  let component: OptionsEtudiantDetailComponent;
  let fixture: ComponentFixture<OptionsEtudiantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsEtudiantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsEtudiantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
