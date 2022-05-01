import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldBoxComponent } from './gold-box.component';

describe('MenuBoxComponent', () => {
  let component: GoldBoxComponent;
  let fixture: ComponentFixture<GoldBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoldBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
