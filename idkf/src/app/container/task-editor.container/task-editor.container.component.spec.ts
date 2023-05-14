import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditor.ContainerComponent } from './task-editor.container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('TaskEditor.ContainerComponent', () => {
  let component: TaskEditor.ContainerComponent;
  let fixture: ComponentFixture<TaskEditor.ContainerComponent>;
  let store: MockStore;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore() ],
      declarations: [ TaskEditor.ContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditor.ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
