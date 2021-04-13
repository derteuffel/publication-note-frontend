import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsEtudiantAddComponent } from './options-etudiant-add.component';

describe('OptionsEtudiantAddComponent', () => {
  let component: OptionsEtudiantAddComponent;
  let fixture: ComponentFixture<OptionsEtudiantAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsEtudiantAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsEtudiantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
