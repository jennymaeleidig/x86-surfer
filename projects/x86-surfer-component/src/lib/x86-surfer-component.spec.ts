import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X86SurferComponent } from './x86-surfer-component';

describe('X86SurferComponent', () => {
  let component: X86SurferComponent;
  let fixture: ComponentFixture<X86SurferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [X86SurferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X86SurferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
