import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main.ContainerComponent } from './main.container.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('Main.ContainerComponent', () => {
  let component: Main.ContainerComponent;
  let fixture: ComponentFixture<Main.ContainerComponent>;
  let store: MockStore;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [ provideMockStore() ],
      declarations: [ Main.ContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Main.ContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
