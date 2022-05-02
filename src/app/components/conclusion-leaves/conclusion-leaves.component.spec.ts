import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionLeavesComponent } from './conclusion-leaves.component';

describe('ConclusionLeavesComponent', () => {
  let component: ConclusionLeavesComponent;
  let fixture: ComponentFixture<ConclusionLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConclusionLeavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
