import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifPracticeComponent } from './ngif-practice.component';

describe('NgifPracticeComponent', () => {
  let component: NgifPracticeComponent;
  let fixture: ComponentFixture<NgifPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
