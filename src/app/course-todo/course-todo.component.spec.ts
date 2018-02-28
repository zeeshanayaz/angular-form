import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTodoComponent } from './course-todo.component';

describe('CourseTodoComponent', () => {
  let component: CourseTodoComponent;
  let fixture: ComponentFixture<CourseTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
