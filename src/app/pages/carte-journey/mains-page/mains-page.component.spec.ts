import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsPageComponent } from './mains-page.component';

describe('MainsPageComponent', () => {
  let component: MainsPageComponent;
  let fixture: ComponentFixture<MainsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
