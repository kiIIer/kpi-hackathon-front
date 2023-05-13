import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectsPresentationComponent } from './subjects.presentation.component';

describe('SubjectsComponent', () => {
  let component: SubjectsPresentationComponent;
  let fixture: ComponentFixture<SubjectsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsPresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
