import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagewapperComponent } from './pagewapper.component';

describe('PagewapperComponent', () => {
  let component: PagewapperComponent;
  let fixture: ComponentFixture<PagewapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagewapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagewapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
