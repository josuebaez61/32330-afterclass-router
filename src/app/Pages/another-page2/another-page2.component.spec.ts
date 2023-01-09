import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPage2Component } from './another-page2.component';

describe('AnotherPage2Component', () => {
  let component: AnotherPage2Component;
  let fixture: ComponentFixture<AnotherPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
