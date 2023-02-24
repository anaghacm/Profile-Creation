import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBtnComponent } from './fixed-btn.component';

describe('FixedBtnComponent', () => {
  let component: FixedBtnComponent;
  let fixture: ComponentFixture<FixedBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
