import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1Component } from './Test1.component';

describe('Component1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
