import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatButtonComponent } from './fat-button.component';

describe('FatButtonComponent', () => {
  let component: FatButtonComponent;
  let fixture: ComponentFixture<FatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
