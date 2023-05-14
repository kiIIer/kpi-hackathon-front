import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject.ContainerComponent } from './subject.container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('Subject.ContainerComponent', () => {
  let component: Subject.ContainerComponent;
  let fixture: ComponentFixture<Subject.ContainerComponent>;
  let store: MockStore;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore() ],
      declarations: [ Subject.ContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subject.ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
