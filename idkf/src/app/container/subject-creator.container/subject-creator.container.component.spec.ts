import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCreator.ContainerComponent } from './subject-creator.container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('SubjectCreator.ContainerComponent', () => {
  let component: SubjectCreator.ContainerComponent;
  let fixture: ComponentFixture<SubjectCreator.ContainerComponent>;
  let store: MockStore;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore() ],
      declarations: [ SubjectCreator.ContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectCreator.ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
