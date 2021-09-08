import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareloanComponent } from './hardwareloan.component';

describe('HardwareloanComponent', () => {
  let component: HardwareloanComponent;
  let fixture: ComponentFixture<HardwareloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
