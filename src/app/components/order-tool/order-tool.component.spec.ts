import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderToolComponent } from './order-tool.component';

describe('OrderToolComponent', () => {
  let component: OrderToolComponent;
  let fixture: ComponentFixture<OrderToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
