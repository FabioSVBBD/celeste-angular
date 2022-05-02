import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartersPageComponent } from './starters-page.component';

describe('StartersPageComponent', () => {
  let component: StartersPageComponent;
  let fixture: ComponentFixture<StartersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
