import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEditor.ContainerComponent } from './subject-editor.container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('SubjectEditor.ContainerComponent', () => {
  let component: SubjectEditor.ContainerComponent;
  let fixture: ComponentFixture<SubjectEditor.ContainerComponent>;
  let store: MockStore;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore() ],
      declarations: [ SubjectEditor.ContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectEditor.ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
