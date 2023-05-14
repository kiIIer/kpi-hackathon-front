import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskEditorPresentationComponent } from './task-editor.presentation.component';

describe('TaskEditorPresentationComponent', () => {
  let component: TaskEditorPresentationComponent;
  let fixture: ComponentFixture<TaskEditorPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditorPresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskEditorPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
