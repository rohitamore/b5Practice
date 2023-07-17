import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalcrudeComponent } from './localcrude.component';

describe('LocalcrudeComponent', () => {
  let component: LocalcrudeComponent;
  let fixture: ComponentFixture<LocalcrudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalcrudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalcrudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
