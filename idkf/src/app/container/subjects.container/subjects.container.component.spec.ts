import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subjects.ContainerComponent } from './subjects.container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('Subjects.ContainerComponent', () => {
  let component: Subjects.ContainerComponent;
  let fixture: ComponentFixture<Subjects.ContainerComponent>;
  let store: MockStore;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore() ],
      declarations: [ Subjects.ContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subjects.ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
