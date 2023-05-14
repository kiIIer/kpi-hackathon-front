import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreator.ContainerComponent } from './task-creator.container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('TaskCreator.ContainerComponent', () => {
  let component: TaskCreator.ContainerComponent;
  let fixture: ComponentFixture<TaskCreator.ContainerComponent>;
  let store: MockStore;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore() ],
      declarations: [ TaskCreator.ContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCreator.ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
