import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTasks.ContainerComponent } from './all-tasks.container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('AllTasks.ContainerComponent', () => {
  let component: AllTasks.ContainerComponent;
  let fixture: ComponentFixture<AllTasks.ContainerComponent>;
  let store: MockStore;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore() ],
      declarations: [ AllTasks.ContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTasks.ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
