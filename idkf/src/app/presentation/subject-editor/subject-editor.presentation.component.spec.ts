import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectEditorPresentationComponent } from './subject-editor.presentation.component';

describe('SubjectEditorPresentationComponent', () => {
  let component: SubjectEditorPresentationComponent;
  let fixture: ComponentFixture<SubjectEditorPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectEditorPresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectEditorPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
