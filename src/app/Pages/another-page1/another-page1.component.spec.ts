import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPage1Component } from './another-page1.component';

describe('AnotherPage1Component', () => {
  let component: AnotherPage1Component;
  let fixture: ComponentFixture<AnotherPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
