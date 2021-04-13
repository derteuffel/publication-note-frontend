import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSessionDetailComponent } from './note-session-detail.component';

describe('NoteSessionDetailComponent', () => {
  let component: NoteSessionDetailComponent;
  let fixture: ComponentFixture<NoteSessionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteSessionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteSessionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
