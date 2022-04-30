import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeavesComponent } from './home-leaves.component';

describe('HomeLeavesComponent', () => {
  let component: HomeLeavesComponent;
  let fixture: ComponentFixture<HomeLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLeavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
