import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForPraticeComponent } from './ng-for-pratice.component';

describe('NgForPraticeComponent', () => {
  let component: NgForPraticeComponent;
  let fixture: ComponentFixture<NgForPraticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForPraticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForPraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
