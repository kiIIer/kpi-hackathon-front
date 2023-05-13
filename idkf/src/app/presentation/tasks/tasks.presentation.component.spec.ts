import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPresentationComponent } from './tasks.presentation.component';

describe('TasksPresentationComponent', () => {
  let component: TasksPresentationComponent;
  let fixture: ComponentFixture<TasksPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TasksPresentationComponent]
    });
    fixture = TestBed.createComponent(TasksPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
